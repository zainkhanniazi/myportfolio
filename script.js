// Loading Screen
window.addEventListener("load", () => {
  const loader = document.getElementById("loader")
  setTimeout(() => {
    loader.style.opacity = "0"
    setTimeout(() => {
      loader.style.display = "none"
    }, 500)
  }, 2000)
})

// Mobile Navigation
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  }
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 70 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Active navigation link
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })
})

// Typing animation
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }
  type()
}

// Initialize typing animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const typingElement = document.getElementById("typing-text")
    if (typingElement) {
      typingElement.style.width = "100%"
    }
  }, 1500)
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  // Add animation classes to elements
  const animateElements = [
    { selector: ".about-text", class: "fade-in" },
    { selector: ".about-card", class: "scale-in" },
    { selector: ".skill-item", class: "fade-in" },
    { selector: ".project-card", class: "slide-in-left" },
    { selector: ".contact-info", class: "slide-in-left" },
    { selector: ".contact-form", class: "slide-in-right" },
  ]

  animateElements.forEach((item) => {
    const elements = document.querySelectorAll(item.selector)
    elements.forEach((element, index) => {
      element.classList.add(item.class)
      element.style.transitionDelay = `${index * 0.1}s`
      observer.observe(element)
    })
  })
})

// Skills progress animation
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll(".skill-progress")
        progressBars.forEach((bar) => {
          const width = bar.getAttribute("data-width")
          setTimeout(() => {
            bar.style.width = width
          }, 500)
        })
      }
    })
  },
  { threshold: 0.5 },
)

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(".skills")
  if (skillsSection) {
    skillsObserver.observe(skillsSection)
  }
})

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  function updateCounter() {
    start += increment
    if (start < target) {
      element.textContent = Math.floor(start) + "+"
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target + "+"
    }
  }
  updateCounter()
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statItems = entry.target.querySelectorAll(".stat-item h4")
        statItems.forEach((stat) => {
          const target = Number.parseInt(stat.textContent)
          animateCounter(stat, target)
        })
      }
    })
  },
  { threshold: 0.5 },
)

document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about")
  if (aboutSection) {
    statsObserver.observe(aboutSection)
  }
})

// Contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields")
    return
  }

  // Simulate form submission
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Thank you for your message! I will get back to you soon.")
    this.reset()
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const heroContent = document.querySelector(".hero-content")

  if (hero && heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add floating animation to project cards
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`

    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) rotateY(5deg)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) rotateY(0deg)"
    })
  })
})

// Add hover effect to skill items
document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skill-item")

  skillItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".skill-icon i")
      if (icon) {
        icon.style.transform = "scale(1.2) rotate(10deg)"
      }
    })

    item.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".skill-icon i")
      if (icon) {
        icon.style.transform = "scale(1) rotate(0deg)"
      }
    })
  })
})

// Add particle effect to hero section
function createParticles() {
  const hero = document.querySelector(".hero")
  if (!hero) return

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `
    hero.appendChild(particle)
  }
}

// Initialize particles
document.addEventListener("DOMContentLoaded", createParticles)

// Add scroll progress indicator
function createScrollProgress() {
  const progressBar = document.createElement("div")
  progressBar.className = "scroll-progress"
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.3s ease;
    `
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset
    const docHeight = document.body.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    progressBar.style.width = scrollPercent + "%"
  })
}

// Initialize scroll progress
document.addEventListener("DOMContentLoaded", createScrollProgress)

// Add theme toggle functionality
function createThemeToggle() {
  const themeToggle = document.createElement("button")
  themeToggle.className = "theme-toggle"
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>'
  themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme")
    const icon = this.querySelector("i")
    if (document.body.classList.contains("dark-theme")) {
      icon.className = "fas fa-sun"
    } else {
      icon.className = "fas fa-moon"
    }
  })

  document.body.appendChild(themeToggle)
}

// Initialize theme toggle
document.addEventListener("DOMContentLoaded", createThemeToggle)

// Add cursor trail effect
let mouseX = 0
let mouseY = 0
const trail = []

function createCursorTrail() {
  for (let i = 0; i < 10; i++) {
    const dot = document.createElement("div")
    dot.className = "cursor-dot"
    dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: ${1 - i * 0.1};
            transition: all 0.1s ease;
        `
    document.body.appendChild(dot)
    trail.push(dot)
  }
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY

  trail.forEach((dot, index) => {
    setTimeout(() => {
      dot.style.left = mouseX + "px"
      dot.style.top = mouseY + "px"
    }, index * 10)
  })
})

// Initialize cursor trail on desktop only
if (window.innerWidth > 768) {
  document.addEventListener("DOMContentLoaded", createCursorTrail)
}
