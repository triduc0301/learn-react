import React from "react";
import "./pagestyles.scss";
import TodoList from "../components/TodoList/todoList";
// import PropTypes from 'prop-types';

const todoList: { id: number; description: string }[] = [
  {
    id: 1,
    description: "ní hảo",
  },
  {
    id: 2,
    description: "hế lồ",
  },
  {
    id: 3,
    description: "bông zua",
  },
  {
    id: 4,
    description: "àn zong",
  },
];

TodoFeature.propTypes = {};

function TodoFeature(props: any) {
  return (
    <div>
      <h2>TodoList</h2>
      <TodoList />
      đâsd
    </div>
  );
}

export default TodoFeature;
