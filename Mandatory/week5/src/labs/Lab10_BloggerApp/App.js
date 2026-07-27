import React, { useState } from "react";
function BookDetails({ available }) {
  if (available) {
    return <p>Book Details: "React in Action" is available in the library.</p>;
  } else {
    return <p>Book Details: "React in Action" is currently checked out.</p>;
  }
}

function BlogDetails({ published }) {
  let content;
  if (published) {
    content = <p>Blog Details: "Understanding Hooks" was published today.</p>;
  } else {
    content = <p>Blog Details: This blog post is still in draft.</p>;
  }
  return <div>{content}</div>;
}

function CourseDetails({ enrolled }) {
  return (
    <div>
      {enrolled ? (
        <p>Course Details: You are enrolled in "Advanced React".</p>
      ) : (
        <p>Course Details: You are not enrolled in any course.</p>
      )}
    </div>
  );
}


function Notification({ hasNewMessage }) {
  return <div>{hasNewMessage && <p>🔔 You have a new message!</p>}</div>;
}


function Banner({ show }) {
  if (!show) {
    return null;
  }
  return <p style={{ background: "yellow" }}>Special offer: 20% off this week!</p>;
}

function Lab10_BloggerApp() {
  const [bookAvailable, setBookAvailable] = useState(true);
  const [blogPublished, setBlogPublished] = useState(false);
  const [courseEnrolled, setCourseEnrolled] = useState(true);
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div>
      <h2>Blogger App - Conditional Rendering Techniques</h2>

      <h4>1. if / else in a function component</h4>
      <BookDetails available={bookAvailable} />
      <button onClick={() => setBookAvailable(!bookAvailable)}>Toggle Book Availability</button>

      <h4>2. Element variables</h4>
      <BlogDetails published={blogPublished} />
      <button onClick={() => setBlogPublished(!blogPublished)}>Toggle Publish Status</button>

      <h4>3. Ternary operator</h4>
      <CourseDetails enrolled={courseEnrolled} />
      <button onClick={() => setCourseEnrolled(!courseEnrolled)}>Toggle Enrollment</button>

      <h4>4. Logical && operator</h4>
      <Notification hasNewMessage={hasNewMessage} />
      <button onClick={() => setHasNewMessage(!hasNewMessage)}>Toggle Notification</button>

      <h4>5. Preventing rendering (return null)</h4>
      <Banner show={showBanner} />
      <button onClick={() => setShowBanner(!showBanner)}>Toggle Banner</button>
    </div>
  );
}

export default Lab10_BloggerApp;
