import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Difference between authorization and authentication :
          </h5>
          <p className="card-text">
          JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter. JavaScript is basically used on the client-side and NodeJs is mostly used on the server-side.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
          When should you use nodejs and when should you use mongodb :
          </h5>
          <p className="card-text">
          Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc. So, if we want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
          
          For MongoDB, If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. Code within some application or server uses MongoDB to save, query or update data in a database.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
          Differences between sql and nosql databases :
          </h5>
          <p className="card-text">
            Comparing SQL vs NoSQL database, SQL databases are table based databases whereas NoSQL databases can be document based, key-value pairs, graph databases.SQL databases are vertically scalable while NoSQL databases are horizontally scalable.SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;