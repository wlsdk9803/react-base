import "./PlaceHolder.css";
import { IoAddCircleOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PlaceHolderModal from "./PlaceHolderModal";

const apiUrl = "https://jsonplaceholder.typicode.com";

export const PlaceHolder = () => {
  const [articleArr, setArticleArr] = useState([]);
  const [updateMode, setUpdateMode] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const onDelete = (id) => {
    axios
      .delete(`${apiUrl}/posts/${id}`)
      .then(() => {
        setArticleArr(articleArr.filter((item) => item.id !== id));
        alert("삭제되었습니다.");
        console.log("삭제");
      })
      .catch((error) => {
        console.log("Error deleting data: ", error);
      });
  };
  const onUpdate = (id) => {
    alert("수정되었습니다.");
    toggleUpdateMode(id);
  };
  const toggleUpdateMode = (id) => {
    setUpdateMode((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const updateArticle = (value, id, type) => {
    const updatedArticles = articleArr.map((item) =>
      item.id === id ? { ...item, [type]: value } : item
    );
    setArticleArr(updatedArticles);
  };
  const addArticle = () => {
    const newId =
      articleArr.length > 0
        ? Math.max(...articleArr.map((elem) => elem.id)) + 1
        : 1;
    const newArticle = {
      id: newId,
      userId: Math.floor(Math.random() * 11),
      title: newTitle,
      body: newBody,
    };
    axios
      .post(`${apiUrl}/posts`, newArticle)
      .then(() => {
        setArticleArr([...articleArr, newArticle]);
        setShowModal(false);
        alert("게시물이 추가되었습니다.");
        setNewTitle("");
        setNewBody("");
      })
      .catch((error) => {
        console.log("Error adding data: ", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}/posts`)
      .then((response) => {
        setArticleArr(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <IoAddCircleOutline
        size="40px"
        style={{
          cursor: "pointer",
          position: "fixed",
          right: "0",
          marginRight: "30px",
          transform: isHovered ? "scale(1.2)" : "scale(1)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
      />
      <PlaceHolderModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={addArticle}
        setNewTitle={setNewTitle}
        setNewBody={setNewBody}
      />
      {articleArr.map((elem) => {
        const isUpdateMode = updateMode[elem.id] || false;
        return (
          <div key={elem.id} style={{ borderBottom: "1px solid gray" }}>
            <p>
              <b>UserId:</b> {elem.userId}
            </p>
            <p>
              <b>Id:</b> {elem.id}
            </p>
            <p>
              <b>Title:</b>
              {isUpdateMode ? (
                <input
                  value={elem.title}
                  onChange={(e) =>
                    updateArticle(e.target.value, elem.id, "title")
                  }
                />
              ) : (
                <span>{elem.title}</span>
              )}
            </p>
            <p>
              <b>Body:</b>
              {isUpdateMode ? (
                <input
                  value={elem.body}
                  onChange={(e) =>
                    updateArticle(e.target.value, elem.id, "body")
                  }
                />
              ) : (
                <span>{elem.body}</span>
              )}
            </p>
            <button
              style={{ marginBottom: "10px" }}
              onClick={() => onDelete(elem.id)}
            >
              삭제
            </button>
            {isUpdateMode ? (
              <button
                style={{ margin: "0 0 10px 10px" }}
                onClick={() => onUpdate(elem.id)}
              >
                수정하기
              </button>
            ) : (
              <button
                style={{ cursor: "pointer", margin: "0 0 10px 10px" }}
                onClick={() => toggleUpdateMode(elem.id)}
              >
                수정
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};
