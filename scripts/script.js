const btn = document.getElementById('btn');
const cancel = document.getElementById('cancel');
const sidebar = document.getElementById('sidebar');
const darkSidebarOverlay = document.getElementById('darkSidebarOverlay');

function closeSidebar() {
    sidebar.classList.remove('active');
    btn.style.display = 'block';
    cancel.style.display = 'none';
    darkSidebarOverlay.style.display = 'none';
}

btn.addEventListener('click', () => {
    sidebar.classList.add('active');
    btn.style.display = 'none';
    cancel.style.display = 'block';
    darkSidebarOverlay.style.display = 'block';
});

cancel.addEventListener('click', closeSidebar);
darkSidebarOverlay.addEventListener('click', closeSidebar);

document.getElementById("openFormBtn").onclick = function() {
    document.getElementById("formModal").style.display = "block";
};

document.getElementById("openFormBtn2").onclick = function() {
    document.getElementById("formModal").style.display = "block";
    closeSidebar();
};

document.getElementById("closeFormBtn").onclick = function() {
    document.getElementById("formModal").style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById("formModal")) {
      document.getElementById("formModal").style.display = "none";
    }
};

const servicesBtn = document.getElementById("servicesBtn");
const dropdown = document.getElementById("servicesDropdown");

servicesBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpen = dropdown.style.display === "flex";
    dropdown.style.display = isOpen ? "none" : "flex";
    servicesBtn.classList.toggle("open", !isOpen);
});

document.addEventListener("click", function (event) {
    if (!servicesBtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
        servicesBtn.classList.remove("open");
    }
});

const sidebarBtn = document.getElementById("sidebarServicesBtn");
const sidebarDropdown = document.getElementById("sidebarServicesDropdown");

sidebarBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        const isOpen = sidebarDropdown.style.display === "flex";
        sidebarDropdown.style.display = isOpen ? "none" : "flex";
        sidebarBtn.classList.toggle("open", !isOpen);
});

document.addEventListener("click", function(event) {
    if (!sidebarBtn.contains(event.target) && !sidebarDropdown.contains(event.target)) {
        sidebarDropdown.style.display = "none";
        sidebarBtn.classList.remove("open");
    }
});

const footerBtn = document.getElementById("footerServicesBtn");
const footerDropdown = document.getElementById("footerServicesDropdown");

footerBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    const isOpen = footerDropdown.style.display === "flex";
    footerDropdown.style.display = isOpen ? "none" : "flex";
    footerBtn.classList.toggle("open", !isOpen);
});

document.addEventListener("click", function(event) {
    if (!footerBtn.contains(event.target) && !footerDropdown.contains(event.target)) {
        footerDropdown.style.display = "none";
        footerBtn.classList.remove("open");
    }
});