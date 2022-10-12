import "./Part1.css";
import React from "react";
import { useState } from "react";
import main from "./../img/main.png";
import pic from "./../img/maxresdefault.jpg";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { Input } from "antd";

import {
  HeartOutlined,
  CommentOutlined,
  SendOutlined,
  SaveOutlined,
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

const Main = () => {
  const [valueInput, setValueInput] = useState("");
  const [comment, setComment] = useState([]);
  const [edit, setEdit] = useState(null);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setValueInput(value);
  };

  const handleAddComent = () => {
    const newComment = [...comment, { name: valueInput, add: false }];
    setComment(newComment);
    setValueInput("");
  };

  const handleEdit = (index, value) => {
    setInput(value);
    setEdit(index);
  };

  const handleDelete = (i) => {
    const array = [...comment];
    array.splice(i, 1);
    setComment(array);
  };

  const handleLike = () => {
    return (
      <Space>
        <HeartOutlined />
      </Space>
    );
  };

  const handleSave = (index) => {
    const array = comment.map((item, i) => {
      if (index === i) {
        const newItem = { ...item };
        newItem.name = input;
        return newItem;
      } else {
        return item;
      }
    });
    setComment(array);
    setEdit(false);
    setInput("");
  };

  return (
    <div className="main">
      <div className="body">
        <div className="img-main">
          <div className="img">
            <img src={main} alt="img"></img>
          </div>
        </div>
        <div className="part2">
          <div className="part2-body">
            <div className="nav">
              <div className="nav-sub">
                <div className="logo">
                  <img src={pic} className="pic" alt="img"></img>
                </div>
                <div className="nick">Iska</div>
                <div className="nav-title">•</div>
                <div className="nav-title-blue">Follow</div>
              </div>
              <div className="more">...</div>
            </div>
            <div>
              <hr className="hr" />
            </div>

            <div className="comment">
              {comment.map((item, index) => (
                <div className="comment-sub" key={index}>
                  <div>
                    <img src={pic} className="pic" alt="img"></img>
                  </div>

                  {edit === index ? (
                    <div className="comment-edit">
                      <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                      ></Input>
                      <Space>
                        <CheckOutlined onClick={() => handleSave(index)} />
                      </Space>
                    </div>
                  ) : (
                    <div className="comment-title">
                      <span className="nick">Iska</span> {item.name}
                    </div>
                  )}

                  {edit === index ? (
                    <div></div>
                  ) : (
                    <div className="edit">
                      <div className="edit-sub">
                        <Space>
                          <EditOutlined
                            onClick={() => handleEdit(index, item.name)}
                          />
                        </Space>
                      </div>

                      <div>
                        <Space>
                          <DeleteOutlined onClick={() => handleDelete(index)} />
                        </Space>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <hr className="hr" />

            <div className="like">
              <div className="like-sub">
                <Space>
                  <HeartOutlined onClick={handleLike()} />
                  <CommentOutlined />
                  <SendOutlined />
                </Space>
              </div>
              <div>
                <Space>
                  <SaveOutlined />
                </Space>
              </div>
            </div>

            <div>
              <div className="footer">1 likes</div>
              <div className="footer-days">3 Days Ago</div>
            </div>

            <hr className="hr" />

            <div className="add-comment">
              <div className="footer">
                <div>
                  <input
                    placeholder=" Add comment..."
                    className="input"
                    id="input"
                    value={valueInput}
                    onChange={handleInput}
                  ></input>
                </div>
                <div>
                  <Space>
                    <CheckOutlined onClick={handleAddComent} />
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
