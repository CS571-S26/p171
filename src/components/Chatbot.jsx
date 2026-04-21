import { useState } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";

const SYSTEM_PROMPT = `You are Eva, a Computer Science and Economics student at the University of Wisconsin-Madison. Answer questions as if you are Eva — friendly, thoughtful, and concise.

Here are facts about you:
- Incoming Software Engineering & Project Management Intern at Microsoft (Summer 2026)
- Instructor Assistant at Kode With Klossy (Summer 2025): taught Python and AI/ML, mentored students building chatbots with HuggingFace and RAG, showcased at Apple Fifth Avenue
- Completed CodePath Technical Interview Prep 102
- Projects: Portfolio Website (React/Bootstrap), Green Guide (AI chatbot for eco travel tips), Handwriting OCR (Python/Django/Tesseract)
- Interests: AI, design, and building impactful technology

If asked something you don't know, say you're not sure but invite them to reach out directly. Keep answers to 2-4 sentences. Never make things up.`;

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;
  
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
  
    try {
      const response = await fetch("https://cs571api.cs.wisc.edu/rest/s26/hw10/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CS571-ID": "bid_236538f319d1c8ee99874148fe1b20318f9da79aeb086e91d1a95a6225ad1c4f",
        },
        body: JSON.stringify([
          { role: "developer", content: SYSTEM_PROMPT },
          ...newMessages,
        ]),
      });
  
      const data = await response.json();
      const reply = data.msg ?? "Sorry, I couldn't get a response.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Something went wrong. Try again!" }]);
    }
  
    setLoading(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <Card style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Card.Body>
        <Card.Title>Ask Eva anything</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          Curious about my experience, projects, or background? Ask away!
        </Card.Subtitle>

        {/* Chat history */}
        <div
          style={{
            height: "300px",
            overflowY: "auto",
            border: "1px solid #dee2e6",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {messages.length === 0 && (
            <p style={{ color: "#aaa", textAlign: "center", marginTop: "auto", marginBottom: "auto" }}>
              Ask me about my projects, internships, skills...
            </p>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                background: msg.role === "user" ? "#0d6efd" : "#f0f0f0",
                color: msg.role === "user" ? "white" : "black",
                borderRadius: "12px",
                padding: "8px 14px",
                maxWidth: "80%",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {msg.content}
            </div>
          ))}
          {loading && (
            <div style={{ alignSelf: "flex-start" }}>
              <Spinner animation="grow" size="sm" variant="secondary" />
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{ display: "flex", gap: "8px" }}>
          <Form.Control
            type="text"
            placeholder="Type a question..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
          />
          <Button onClick={sendMessage} disabled={loading || !input.trim()}>
            Send
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}