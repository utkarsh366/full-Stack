function ToDoitem1() {
  let todoName = "Go to college";
  let todoDate = "14/10/2014";
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">{todoName} </div>
        <div class="col-4">{todoDate} </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoitem1;
