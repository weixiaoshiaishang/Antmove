Component({
    props: {
        hidden: {
            type: Boolean,
            value: true,
            observer: function () {
                this.watchHidden();
            }
        },
        duration: Number,
        textContent: String
    },
    methods: {
        watchHidden () {
            const num = Number(this.props.duration);
            if (!this.props.hidden) {
                const that = this;
                setTimeout(() => {
                    const e = {
                        type: "change"
                    };
                    that.triggerEvent('tostchange', e);
                }, num);
            }
        }
    },
    didUpdate () {
        this.watchHidden();
    }
});