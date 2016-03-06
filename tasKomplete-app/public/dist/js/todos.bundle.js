webpackJsonp([1],{0:function(e,t,o){e.exports=o(91)},39:function(e,t,o){var a,n;try{(function(){"use strict";a=[o(14),o(15)],n=function(e,t){var o=e.createClass({displayName:"Header",render:function(){return this.props.userName?e.createElement("header",{className:"header-fixed"},e.createElement("div",{className:"header-limiter"},e.createElement("h1",null,e.createElement("a",{href:"#"},"tasKomplete")),e.createElement("nav",null,e.createElement("a",{href:"#"},"Welcome, ",this.props.userName),e.createElement("span",null," "),e.createElement("a",{href:"/logout"},"Logout")))):e.createElement("div",{id:"header"},e.createElement("h2",null,"Welcome to tasKomplete. Organize your tasks, keep track of active ones, and increase your productivity!"))}});return o}.apply(t,a),!(void 0!==n&&(e.exports=n))}).call(this)}finally{}},87:function(e,t,o){var a,n;try{(function(){"use strict";a=[o(14),o(15)],n=function(e,t){var o=e.createClass({displayName:"SingleTodo",getInitialState:function(){return{content:this.props.content,editing:!1}},myVar:{formSubmitted:!1},handleChange:function(e){this.setState({content:e.currentTarget.value})},componentWillReceiveProps:function(e){this.setState({content:e.content})},componentDidUpdate:function(){var t=e.findDOMNode(this.refs.editInput);t.focus(),t.setSelectionRange(t.value.length,t.value.length)},saveTodoOnSubmit:function(e){e.preventDefault(),this.myVar.formSubmitted=!0,this.props.saveTodo(this.props.todoId,e.target.children[0].value),this.setState({editing:!1})},saveTodoOnBlur:function(e){this.myVar.formSubmitted?this.myVar.formSubmitted=!1:this.props.saveTodo(this.props.todoId,e.target.value),e.preventDefault(),this.setState({editing:!1})},deleteTodo:function(){this.props.deleteTodo(this.props.todoId)},changeFinishStatus:function(e){e.target.checked?this.props.markAsFinished(this.props.todoId):this.props.markAsActive(this.props.todoId)},updateInputField:function(e){this.setState({content:e.target.value})},editTodo:function(e){this.setState({editing:!0})},render:function(){var t=this,o="";return this.props.finishStatus&&(o="completed"),this.state.editing&&(o+=" editing"),e.createElement("li",{className:o},e.createElement("div",{className:"view"},e.createElement("input",{className:"toggle",type:"checkbox",checked:this.props.finishStatus,onChange:this.changeFinishStatus}),e.createElement("label",{onDoubleClick:t.editTodo},this.state.content),e.createElement("button",{className:"destroy",onClick:t.deleteTodo})),e.createElement("form",{onSubmit:this.saveTodoOnSubmit,className:"inputClassOne"},e.createElement("input",{className:"edit",value:this.state.content,onChange:t.handleChange,onBlur:t.saveTodoOnBlur,ref:"editInput"})))}});return o}.apply(t,a),!(void 0!==n&&(e.exports=n))}).call(this)}finally{}},88:function(e,t,o){var a,n;try{(function(){"use strict";a=[o(14),o(15),o(39),o(89)],n=function(e,t,o,a){var n=e.createClass({displayName:"TodoApp",componentDidMount:function(){this.fetchNotifications()},fetchNotifications:function(){t.ajax({type:"GET",url:"/notifications",datatype:"json",success:function(e){console.log(e)},error:function(e,t,o){console.log(o)}})},fetchAllTodos:function(){this.refs.TodoList.fetchAllTodos()},render:function(){return e.createElement("div",{id:"todoApp"},e.createElement(o,{userName:this.props.userName}),e.createElement("div",{id:"contentWrapper"},e.createElement(a,{ref:"TodoList"})),e.createElement("div",{id:"bgImg"}),e.createElement("div",{className:"overlay"}))}});return n}.apply(t,a),!(void 0!==n&&(e.exports=n))}).call(this)}finally{}},89:function(e,t,o){var a,n;try{(function(){"use strict";a=[o(14),o(15),o(87)],n=function(e,t,o){var a=e.createClass({displayName:"TodoList",getInitialState:function(){return{allTodos:[],activeTodos:[],completedTodos:[],todosToDisplay:"all"}},componentDidMount:function(){this.fetchAllTodos()},createNewTodo:function(e){var o=document.getElementById("inputTodo"),a=this;if(""!==o.value){var n={todoContent:o.value};t.ajax({type:"POST",url:"/todos",datatype:"json",data:n,success:function(e){o.value="",a.fetchAllTodos()},error:function(e,t,o){console.log(o)}})}e.preventDefault()},fetchAllTodos:function(){t.ajax({type:"GET",url:"/todos",datatype:"json",success:function(e){for(var t=[],o=[],a=[],n=0;n<e.allTodos.length;n++)t.push(e.allTodos[n]),e.allTodos[n].finishStatus===!1?o.push(e.allTodos[n]):e.allTodos[n].finishStatus===!0&&a.push(e.allTodos[n]);this.setState({allTodos:t,activeTodos:o,completedTodos:a})}.bind(this),error:function(e,t,o){console.log(o)}})},saveTodo:function(e,o){var a={todoId:e,todoContent:o},n=this;t.ajax({type:"POST",url:"/todo/update",datatype:"json",data:a,success:function(e){n.fetchAllTodos()},error:function(e,t,o){console.log(o)}})},deleteTodo:function(e){var o={todoId:e},a=this;t.ajax({type:"POST",url:"/todo/delete",datatype:"json",data:o,success:function(e){a.fetchAllTodos()},error:function(e,t,o){console.log(o)}})},markAsFinished:function(e){var o={todoId:e},a=this;t.ajax({type:"POST",url:"/todo/mark_complete",datatype:"json",data:o,success:function(e){a.fetchAllTodos()},error:function(e,t,o){console.log(o)}})},markAsActive:function(e){var o={todoId:e},a=this;t.ajax({type:"POST",url:"/todo/mark_incomplete",datatype:"json",data:o,success:function(e){a.fetchAllTodos()},error:function(e,t,o){console.log(o)}})},showTodos:function(e,t){this.setState({todosToDisplay:e})},componentDidUpdate:function(e){for(var t=document.getElementsByClassName("selected"),o=0;o<t.length;o++)t[o].className=t[o].className.replace(/selected/g,"");switch(console.log(this.state.todosToDisplay),this.state.todosToDisplay){case"all":document.getElementById("allTodosHeader").className+=" selected";break;case"active":document.getElementById("activeTodosHeader").className+=" selected";break;case"completed":document.getElementById("completedTodosHeader").className+=" selected"}},render:function(){console.log("rendered");var t,a=this;switch(this.state.todosToDisplay){case"all":t=a.state.allTodos;break;case"active":t=a.state.activeTodos;break;case"completed":t=a.state.completedTodos}var n=t.map(function(t){return e.createElement(o,{key:"all"+t._id,todoId:t._id,content:t.content,finishStatus:t.finishStatus,archived:t.archived,date:t.date,deleteTodo:a.deleteTodo,saveTodo:a.saveTodo,markAsFinished:a.markAsFinished,markAsActive:a.markAsActive})});return e.createElement("div",{className:"todoapp"},e.createElement("div",null,e.createElement("header",null,e.createElement("h1",null,"tasKomplete"),e.createElement("form",{onSubmit:this.createNewTodo},e.createElement("input",{className:"new-todo",id:"inputTodo",placeholder:"What needs to be done?"}))),e.createElement("section",{className:"main"},e.createElement("input",{className:"toggle-all",type:"checkbox"}),e.createElement("ul",{className:"todo-list"},n)),e.createElement("footer",{className:"footer"},e.createElement("span",{className:"todo-count"},e.createElement("strong",null,this.state.activeTodos.length),e.createElement("span",null," "),e.createElement("span",null," items "),e.createElement("span",null," left ")),e.createElement("ul",{className:"filters"},e.createElement("li",null,e.createElement("a",{href:"#",id:"allTodosHeader",onClick:this.showTodos.bind(this,"all","allTodosHeader")},"All")),e.createElement("span",null," "),e.createElement("li",null,e.createElement("a",{href:"#",id:"activeTodosHeader",onClick:this.showTodos.bind(this,"active","activeTodosHeader")},"Active")),e.createElement("span",null," "),e.createElement("li",null,e.createElement("a",{href:"#",id:"completedTodosHeader",onClick:this.showTodos.bind(this,"completed","completedTodosHeader")},"Completed"))))))}});return a}.apply(t,a),!(void 0!==n&&(e.exports=n))}).call(this)}finally{}},91:function(e,t,o){var a,n,a,n;try{(function(){"use strict";a=[o(14)],n=function(s){console.log("Loaded the Home Page");var l=document.getElementById("usernameHeader").getAttribute("data-user-name");l?(a=[o(88)],n=function(e){s.render(s.createElement(e,{userName:l}),document.getElementById("componentContainer"))}.apply(t,a),!(void 0!==n&&(e.exports=n))):window.location.replace("/")}.apply(t,a),!(void 0!==n&&(e.exports=n))}).call(this)}finally{}}});