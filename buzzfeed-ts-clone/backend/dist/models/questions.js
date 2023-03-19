"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = exports.Options = exports.Questions = void 0;
class Questions {
    id;
    title;
    options;
    constructor(id, title, options) {
        this.id = id;
        this.title = title;
        this.options = options;
    }
}
exports.Questions = Questions;
class Options {
    options;
    constructor(options) {
        this.options = options;
    }
}
exports.Options = Options;
class Option {
    text;
    image;
    alt;
    credit;
    constructor(text, image, alt, credit) {
        this.text = text;
        this.image = image;
        this.alt = alt;
        this.credit = credit;
    }
}
exports.Option = Option;
//# sourceMappingURL=questions.js.map