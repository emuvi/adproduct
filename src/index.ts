import { QinColumn, QinLabel } from "qinpel-cps";

class AdProduct extends QinColumn {

    private qinHello = new QinLabel("Hello, AdProduct.");

    public constructor() {
        super();
        this.qinHello.install(this);
    }

}


new AdProduct().putAsBody();

