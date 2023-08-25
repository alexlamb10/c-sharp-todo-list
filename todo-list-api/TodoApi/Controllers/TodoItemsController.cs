using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TodoItemsController : ControllerBase
{
    private readonly ITodoItemService _todoItemService;

    public TodoItemsController(ITodoItemService todoItemService)
    {
        _todoItemService = todoItemService;
    }

    [HttpGet("/todoItems")]
    public async Task<ActionResult<IEnumerable<TodoItemDTO>>> GetItems()
    { 
        return await _todoItemService.TodoItems();
    }

    
    [HttpGet("/getTodoById/{id}")]
    public async Task<ActionResult<TodoItemDTO>> GetItemById(long id)
    {
        var todoItem = await _todoItemService.GetTodoItem(id);

        if (todoItem == null)
        {
            return NotFound();
        }

        return ItemToDTO(todoItem);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<TodoItemDTO>> GetTodoItem(long id)
    {
        var todoItem = await _todoItemService.GetTodoItem(id);

        if (todoItem == null)
        {
            return NotFound();
        }

        return ItemToDTO(todoItem);
    }

    [HttpPost("/addTodo")]
    public async Task<ActionResult<TodoItemDTO>> AddItem([FromBody]  TodoItemDTO todoDTO)
    {
        var todoItem = new TodoItem
        {
            IsComplete = todoDTO.IsComplete,
            Name = todoDTO.Name
        };

        _todoItemService.AddTodo(todoItem);
        _todoItemService.SaveChanges();

        return CreatedAtAction(
            nameof(GetTodoItem),
            new { id = todoItem.Id },
            ItemToDTO(todoItem));
    }
    [HttpPut("/updateItem/{id}")]
    public async Task<IActionResult> CompleteTodoItem([FromRoute] long id, [FromBody] TodoItemDTO todoDTO)
    {
        if (id != todoDTO.Id)
        {
            return BadRequest();
        }

        var todoItem = await _todoItemService.GetTodoItem(id);
        _todoItemService.CheckIfNull(todoItem);
        if(todoItem?.IsComplete == false){
            todoDTO.IsComplete = true;
        }else {
            todoDTO.IsComplete = false;
        }
        todoItem.IsComplete = todoDTO.IsComplete;

        try
        {
            _todoItemService.SaveChanges();
        }
        catch (DbUpdateConcurrencyException) when (!TodoItemExists(id))
        {
            return NotFound();
        }

        return NoContent();
    }
    [HttpPut("/updateItemById/{id}")]
    public async Task<IActionResult> EditItemById([FromRoute] long id, [FromBody] TodoItemDTO todoDTO)
    {
        var todoItem = await _todoItemService.GetTodoItem(id);
        if (todoItem == null)
        {
            return NotFound();
        }

        todoItem.Name = todoDTO.Name;
        todoItem.IsComplete = todoDTO.IsComplete;

        try
        {
            _todoItemService.SaveChanges();
        }
        catch (DbUpdateConcurrencyException) when (!TodoItemExists(id))
        {
            return NotFound();
        }

        return NoContent();
    }
     [HttpDelete("/deleteTask/{id}")]
    public async Task<IActionResult> DeleteItem([FromRoute] long id)
    {
        var todoItem = await _todoItemService.GetTodoItem(id);
        if (todoItem == null)
        {
            return NotFound();
        }

        _todoItemService.RemoveTodo(todoItem);
        _todoItemService.SaveChanges();

        return NoContent();
    }


    [HttpPut("/editTodo/{id}")]
    public async Task<IActionResult> EditTodoItem(long id, TodoItemDTO todoDTO)
    {
        if (id != todoDTO.Id)
        {
            return BadRequest();
        }

        var todoItem = await _todoItemService.GetTodoItem(id);
        if (todoItem == null)
        {
            return NotFound();
        }

        todoItem.Name = todoDTO.Name;
        todoItem.IsComplete = todoDTO.IsComplete;

        try
        {
            _todoItemService.SaveChanges();
        }
        catch (DbUpdateConcurrencyException) when (!TodoItemExists(id))
        {
            return NotFound();
        }

        return NoContent();
    }
    public bool TodoItemExists(long id)
    {
        // return _context.TodoItems.Any(e => e.Id == id);
        var exists = _todoItemService.TodoItemExists(id);

        if(exists == false)
        {
            throw new Exception();
        }else {
            return true;
        }
         
    }

    private static TodoItemDTO ItemToDTO(TodoItem todoItem) =>
       new TodoItemDTO
       {
           Id = todoItem.Id,
           Name = todoItem.Name,
           IsComplete = todoItem.IsComplete
       };
}