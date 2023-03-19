class Questions {
    constructor(public id: number, public title: string, public options: Options[]) {}
}

class Options {
    constructor(public options: Option) {}
}

class Option {
    constructor(public text: string, public image: string, public alt: string, public credit: string) {}
}

export { Questions, Options, Option };
