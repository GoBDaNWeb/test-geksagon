import { makeAutoObservable } from 'mobx';

class Modal {
    isOpenClipboard = false;

    constructor() {
        makeAutoObservable(this);
    }

    handleOpenClipboard() {
        this.isOpenClipboard = !this.isOpenClipboard;
    }

    saveTextInClipboard(text) {
        navigator.clipboard.writeText(text);
        this.handleOpenClipboard();
        setTimeout(() => {
            this.handleOpenClipboard();
        }, 2000);
    }
}

export default new Modal();
