var todoLists = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "    <article class=\"todoList\">\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasError : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <form onsubmit=\"event.preventDefault();\">\r\n";
  stack1 = ((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.App : depth0)) != null ? stack1.TodoListEditView : stack1), {"name":"view","hash":{
    'class': ("required"),
    'valueBinding': ("title")
  },"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </form>\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasID : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <ul>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.todos : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </ul>\r\n\r\n";
  stack1 = ((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.App : depth0)) != null ? stack1.TodoListNewView : stack1), {"name":"view","hash":{
    'placeholder': ("Type here to add"),
    'class': ("addTodo"),
    'valueBinding': ("newTodoTitle")
  },"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </article>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <p class=\"error\">"
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"4":function(depth0,helpers,partials,data) {
  return "";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <a href=\"#\" class=\"deletelist\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "deleteTodoList", (depth0 != null ? depth0.id : depth0), {"name":"action","hash":{},"data":data})))
    + ">X</a>\r\n        ";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "todoList", depth0, {"name":"link-to","hash":{
    'class': ("singleList")
  },"fn":this.program(7, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n";
},"7":function(depth0,helpers,partials,data) {
  return "=>";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "            <li>\r\n";
  stack1 = ((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.App : depth0)) != null ? stack1.TodoItemView : stack1), {"name":"view","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </li>\r\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasID : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = ((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.App : depth0)) != null ? stack1.TodoItemEditView : stack1), {"name":"view","hash":{
    'disabledBinding': ("isDone"),
    'class': ("required"),
    'valueBinding': ("title")
  },"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasID : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\r\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.hasError : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                ";
  stack1 = ((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.Ember : depth0)) != null ? stack1.Checkbox : stack1), {"name":"view","hash":{
    'checkedBinding': ("isDone")
  },"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n";
},"13":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <a href=\"#\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "deleteTodo", (depth0 != null ? depth0.id : depth0), {"name":"action","hash":{
    'on': ("click")
  },"data":data})))
    + ">X</a>\r\n";
},"15":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <p class=\"error\">"
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿<h2>Todo Lists</h2>\r\n\r\n<p class=\"error\">"
    + escapeExpression(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"error","hash":{},"data":data}) : helper)))
    + "</p>\r\n<input type=\"button\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "addTodoList", {"name":"action","hash":{},"data":data})))
    + " class=\"isActive\" value=\"Add Todo list\" />\r\n\r\n<section id=\"lists\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.controller : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</section>";
},"useData":true});