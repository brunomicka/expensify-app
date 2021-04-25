import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginTwitter, startLoginFacebook, startLoginWithPassword } from '../actions/auth';

class LoginPage extends React.Component {
    state = {
        showsError: false,
        provider: undefined
    };
    onLoginGoogle = () => {
        this.props.startLoginGoogle();
    };
    onLoginTwitter = () => {
        this.props.startLoginTwitter();
    };
    onLoginFacebook = () => {
        const localState = this;
        this.props.startLoginFacebook().catch((error) => {
            if (error.code === 'auth/account-exists-with-different-credential') {
                var email = error.email;
                return this.props.startLoginWithPassword(email);
            }
        }).then((methods) => {
            localState.onShowError(methods[0]);
        });
    };
    onShowError = (provider) => {
        this.setState({ showsError: true, provider });
    };
    handleCloseModal = () => {
        this.setState({ showsError: false });
    };
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify App</h1>
                    <p>It's time to get your expenses under control.</p>
                    <div className="box-layout__logins">
                        <button className="button" onClick={this.onLoginGoogle}>Login with Google</button>
                        <button className="button" onClick={this.onLoginTwitter}>Login with Twitter</button>
                        <button className="button" onClick={this.onLoginFacebook}>Login with Facebook</button>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.showsError}
                    ariaHideApp={false}
                    onRequestClose={this.props.handleDeleteSelectedOption}
                    contentLabel="Error"
                    closeTimeoutMS={200}
                    className="modal">
                    <h3 className="modal__title">Error</h3>
                    <p>Your account have already been set, please login using another method <strong>{this.state.provider}</strong></p>
                    <div className="modal__buttons">
                        <button onClick={this.handleCloseModal} className="button">OKAY</button>
                    </div>
                </Modal>
            </div>);
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginTwitter: () => dispatch(startLoginTwitter()),
    startLoginFacebook: () => dispatch(startLoginFacebook()),
    startLoginWithPassword: (email) => dispatch(startLoginWithPassword(email))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
