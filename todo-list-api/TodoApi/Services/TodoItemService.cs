using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

public interface ITodoItemService{
    bool TodoItemExists(long id);
    Task<TodoItem> GetTodoItem(long id);
    void SaveChanges();
    void AddTodo(TodoItem todoItem);
    void RemoveTodo(TodoItem todoItem);
    Task<ActionResult<IEnumerable<TodoItemDTO>>> TodoItems();
}

public class TodoItemService : ITodoItemService {
    private readonly TodoContext _context;

    public TodoItemService(TodoContext context)
    {
        _context = context;
    }
    public void AddTodo(TodoItem todoItem) {
        _context.TodoItems.Add(todoItem);
    }

    public async void SaveChanges(){
        await _context.SaveChangesAsync();

    }
    public async Task<TodoItem> GetTodoItem(long id) {
        return await _context.TodoItems.FindAsync(id);
    }


    public bool TodoItemExists(long id)
    {
        return _context.TodoItems.Any(e => e.Id == id);
    }

    public async Task<ActionResult<IEnumerable<TodoItemDTO>>> TodoItems(){
        return await _context.TodoItems.Select(x => ItemToDTO(x))
            .ToListAsync();
    }
    public void RemoveTodo(TodoItem todoItem) {
        _context.TodoItems.Remove(todoItem);
    }

    private static TodoItemDTO ItemToDTO(TodoItem todoItem) =>
       new TodoItemDTO
       {
           Id = todoItem.Id,
           Name = todoItem.Name,
           IsComplete = todoItem.IsComplete
       };
}