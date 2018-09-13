$(document).ready(function() {
  new Vue({
    el: '#top-div',
    data: () => {
      return {
        todos: [],
        todoSearch: "",
        loading: true
      }
    },
    created: function() {
      $.ajax("http://localhost:9001/todos", {
        type: "GET",
        dataType: "json",
        success: function(data) {
          console.log("here", data)
          this.todos = data.todos.map(t => {
            return {
              id: t.id,
              assignee: t.assignee,
              body: t.body.join("\n"),
              lineNumber: t.lineNumber,
              sourceFile: t.sourceFile,
            }
          })
          console.log("todos", this.todos)
          this.loading = false
        }.bind(this)
      })
    }
  })
})
