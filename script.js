const box = document.getElementById("box");
const nameText = document.getElementById("nameText");

// Initial rectangle style
Object.assign(box.style, {
  width: "200px",
  height: "120px",
  backgroundColor: "#FF758F",
  margin: "150px auto",
  transition: "all 0.5s ease",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  clipPath: "none"
});

// Initial text style (hidden)
Object.assign(nameText.style, {
  fontFamily: "'Times New Roman', serif",
  fontSize: "20px",
  color: "#FFC0CB", // baby pink
  opacity: "0",
  transition: "opacity 0.4s ease"
});

// On hover → heart shape + color + show name
box.addEventListener("mouseenter", () => {
  Object.assign(box.style, {
    width: "100px",
    height: "90px",
    clipPath: "path('M50 30 C50 0, 0 0, 0 30 C0 60, 50 90, 50 90 C50 90, 100 60, 100 30 C100 0, 50 0, 50 30 Z')",
    backgroundColor: "#C9184A"
  });

  nameText.style.opacity = "1";
});

// On leave → back to rectangle + hide name
box.addEventListener("mouseleave", () => {
  Object.assign(box.style, {
    width: "200px",
    height: "120px",
    backgroundColor: "#FF758F",
    clipPath: "none"
  });

  nameText.style.opacity = "0";
});
