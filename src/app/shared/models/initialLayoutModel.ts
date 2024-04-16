export class InitialLayoutSideNavContentModel {
    name: string;
    icon: string;
    url: string;

    constructor(data: any) {
        this.name = data.name;
            this.icon = data.icon;
            this.url = data.url;
    }
}