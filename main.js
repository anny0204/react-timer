var Timer = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0
        }
    },

    componentDidUpdate: function() {

    },

    handleStartTimer: function() {
        if (this.timer) clearInterval(this.timer);
        this.setState({seconds: 0});
        this.timer = setInterval(() => {
            this.setState({seconds: (this.state.seconds + 1)});
       }, 1000)
    },

    handleStopTimer: function() {
        clearInterval(this.timer);
    },

    handleContinueTimer: function() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.setState({seconds: (this.state.seconds + 1)});
       }, 1000)
    },

    render: function() {
        return (
            <div className="timer">
                <p>Passed <span className="sec">{this.state.seconds}</span> seconds.</p>
                <div>
                    <button onClick={this.handleStartTimer}>Start</button>
                    <button onClick={this.handleStopTimer}>Pause</button>
                    <button onClick={this.handleContinueTimer}>Continue</button>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Timer />,
    document.getElementById("point_mount")
);