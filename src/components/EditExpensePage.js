import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    state = {
        removeExpense: false
    };
    onEdit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.setState({ removeExpense: true });
    };
    handleRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    };
    handleCloseModal = () => {
        this.setState({ removeExpense: false });
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">
                            Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onEdit} />
                    <button onClick={this.onRemove}
                        className="button button--secondary">Remove Expense</button>
                </div>
                <Modal
                    isOpen={this.state.removeExpense}
                    onRequestClose={this.props.handleDeleteSelectedOption}
                    ariaHideApp={false}
                    contentLabel="Remove Expense"
                    closeTimeoutMS={200}
                    className="modal">
                    <h3 className="modal__title">Remove Expense</h3>
                    {
                        this.props.expense &&
                        <div>
                            <p className="modal__body">Are you sure that you want to remove your expense:</p>
                            <p><span className="modal__subtitle">{this.props.expense.description}</span></p>
                        </div>
                    }
                    <div className="modal__buttons">
                        <button onClick={this.handleRemoveExpense} className="button">YES</button>
                        <button onClick={this.handleCloseModal} className="button">NO</button>
                    </div>
                </Modal>
            </div>);
    }
}

const mapDispatchToProps = (dispatch, props) =>
({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expese) => expese.id === props.match.params.id)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);