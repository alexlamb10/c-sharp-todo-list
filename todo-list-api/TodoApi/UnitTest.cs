using Moq;
using TodoApi.Controllers;
using TodoApi.Models;
using Xunit;

public class myTestClass {

    [Fact]
    public void MyFirstTest() {
        var service = new Mock<ITodoItemService>();
        service.Setup(x => x.TodoItemExists(It.IsAny<long>()))
        .Returns(true);
        // arrange
        var Controller = new TodoItemsController(service.Object);
        var validId = 1;
        // act
        var result = Controller.TodoItemExists(validId);
        // assert
        Assert.Equal(true, result);
    }

    // [Fact]
    // public void MarkAsComplete() {
    //     var service = new Mock<ITodoItemService>();
    //     var Test = new TodoItem{
    //         Id = 1,
    //         Name = "Test",
    //         IsComplete = true

    //     };
    //     service.Setup(x => x.GetTodoItem(It.IsAny<long>()))
    //     .Returns(Task.FromResult(Test));
    //     // arrange
    //     var Controller = new TodoItemsController(service.Object);
    //     var validId = 1;
    //     // act
    //     var result = Controller.TodoItemExists(validId);
    //     // assert
    //     Assert.Throws(false, result);
    // }

    // [Fact]
    // public void checkIfTodoIsNull() {
    //     var service = new Mock<ITodoItemService>();
    //     service.Setup(x => x.CheckIfNull(null));
    //     var exceptionType = typeof(NotFound);
    //     // arrange
    //     var Controller = new TodoItemsController(service.Object);
    //     var validId = 1;
    //     // act
    //     var result = Controller.CompleteTodoItem(validId, null);
    //     // assert
    //     Assert.Throws(exceptionType, () => {
    //     throw new InvalidOperationException();
    // });
    // }
}