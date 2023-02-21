
export class Gift{
    constructor(data) {
        this.id = data.id
        this.opened = data.opened
        this.tag = data.tag
        this.img = this.opened ? data.url : 'https://cdn.theatlantic.com/thumbor/RB483UuaqENhbIHsQcAMa73ipOg=/1050x0:3750x2700/1080x1080/media/img/mt/2022/12/What_Gifts_Say/original.jpg'
    }
}