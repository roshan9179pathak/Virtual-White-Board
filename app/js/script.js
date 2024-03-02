const hamburgerBtn = document.querySelector(".hamburger-button-container"),
    toolsContainer = document.querySelector(".tools-container"),
    paintbrush = document.querySelector(".paintbrush"),
    eraser = document.querySelector(".eraser"),
    rectangle = document.querySelector(".rectangle"),
    circle = document.querySelector(".circle"),
    line = document.querySelector(".line"),
    fillColorCheckbox = document.querySelector(".fill-color"),
    shareBtn = document.querySelector(".share-button-container"),
    app = document.querySelector(".app");

const focusColor = "color: #00acc1;",
    grayColor = "color: var(--color-gray)";

let isToolsContainerVisible = false,
    isPaintbrushSelected = true,
    isEraserSelected = false,
    isRectangleSelected = false,
    isCircleSelected = false,
    isLineSelected = false,
    isFillColorSelected = false;

const hideElement = (element) => {
    element.classList.add("hide");
    element.classList.remove("show");
};

const showElement = (element) => {
    element.classList.add("show");
    element.classList.remove("hide");
};

const setSelectedFalseAll = () => {
    isPaintbrushSelected = false;
    isEraserSelected = false;
    isRectangleSelected = false;
    isCircleSelected = false;
    isLineSelected = false;
};

const setOptionsColorGray = () => {
    paintbrush.style = grayColor;
    paintbrush.querySelector("img").src = "/img/paintbrush.svg";

    eraser.style = grayColor;
    eraser.querySelector("img").src = "/img/eraser.svg";

    rectangle.style = grayColor;
    rectangle.querySelector("img").src = "/img/rectangle.svg";

    circle.style = grayColor;
    circle.querySelector("img").src = "/img/circle.svg";

    line.style = grayColor;
    line.querySelector("img").src = "/img/diagonal-rule.svg";
};

hamburgerBtn.addEventListener("click", () => {
    isToolsContainerVisible = isToolsContainerVisible === true ? false : true;
    if (isToolsContainerVisible) showElement(toolsContainer);
    else hideElement(toolsContainer);
});

paintbrush.addEventListener("click", () => {
    setSelectedFalseAll();
    setOptionsColorGray();
    isPaintbrushSelected = true;
    paintbrush.style = focusColor;
    paintbrush.querySelector("img").src = "/img/paintbrush-focus.svg";
});

eraser.addEventListener("click", () => {
    setSelectedFalseAll();
    setOptionsColorGray();
    isEraserSelected = true;
    eraser.style = focusColor;
    eraser.querySelector("img").src = "/img/eraser-focus.svg";
});

rectangle.addEventListener("click", () => {
    setSelectedFalseAll();
    setOptionsColorGray();
    isRectangleSelected = true;
    rectangle.style = focusColor;
    rectangle.querySelector("img").src =
        "/img/rectangle-focus.svg";
});

circle.addEventListener("click", () => {
    setSelectedFalseAll();
    setOptionsColorGray();
    isCircleSelected = true;
    circle.style = focusColor;
    circle.querySelector("img").src = "/img/circle-focus.svg";
});

line.addEventListener("click", () => {
    setSelectedFalseAll();
    setOptionsColorGray();
    isLineSelected = true;
    line.style = focusColor;
    line.querySelector("img").src = "/img/diagonal-rule-focus.svg";
});

fillColorCheckbox.addEventListener("click", () => {
    if (isFillColorSelected) isFillColorSelected = false;
    else isFillColorSelected = true;

    const checkbox = fillColorCheckbox.querySelector(".fill-color-checkbox");

    if (isFillColorSelected) checkbox.checked = true;
    else checkbox.checked = false;
});

shareBtn.addEventListener("click", () => {
    const div = document.createElement("div");

    div.setAttribute("class", "share-popup flex flex-dir-col flex-ai-c");

    div.innerHTML = `
        <img
        class="close-share-popup-button"
        src="/img/cross.svg"
        alt="cross"
        />
        <p class="collaboration-text">
            Quickdraw is better when you're together.
        </p>
        <p class="share-this-link-text">
            Share this link with other people.
        </p>
        <div class="copy-link-container flex flex-ai-c">
            <input type="text" disabled />
            <div class="tooltip">
                <div
                    class="copy-link-button-container flex flex-jc-c flex-ai-c"
                >
                    <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                    <a class="copy-link-button" href="#">Copy link</a>
                </div>
            </div>
        </div>
        <p class="encryption-message-text">
            🔐 Don't worry, the session uses end-to-end encryption, so
            whatever you draw will stay private.
        </p>
    `;

    app.classList.add("overlay");
    document.body.appendChild(div);

    const closePopupBtn = div.querySelector(".close-share-popup-button");

    closePopupBtn.addEventListener("click", () => {
        app.classList.remove("overlay");
        document.body.removeChild(div);
    });

    const url = window.location.href;

    const copyLinkBtn = div.querySelector(".copy-link-container");
    const input = div.querySelector(".copy-link-container input");

    input.value = url.length > 27 ? url.substring(0, 27) + "..." : url;

    copyLinkBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(url);

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML =
            "Copied: " + (url.length > 10 ? url.substring(0, 10) + "..." : url);
    });
});
