import { EventEmitter } from "node:events";

function createDOMElement() {
    const emitter = new EventEmitter();

    return {
        addEventListener(eventName, callback) {
            emitter.on(eventName, callback);
        },

        removeEventListener(eventName, callback) {
            emitter.off(eventName, callback);
        },

        dispatchEvent(event) {
            emitter.emit(event.type, event);
        },
    };
}

const button = createDOMElement();

function handleClick(event) {
    console.log("Button clicked");
    console.log("Event:", event.type);
}

button.addEventListener("click", handleClick);

button.dispatchEvent({
    type: "click"
});