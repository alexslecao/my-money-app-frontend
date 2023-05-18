import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showRemove } from "../billingCycles/billingCyclesAction";

class BillingCyclesList extends Component {
    
    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const listB = this.props.list || [];

        return listB.map((billingCycle, i) => {
            billingCycle.credits = billingCycle.credits.length == 0 ? [{}] : billingCycle.credits;
            billingCycle.debts = billingCycle.debts.length == 0 ? [{}] : billingCycle.debts;

            return (
                <tr key={billingCycle._id}>
                    <td>{billingCycle.name}</td>
                    <td>{billingCycle.month}</td>
                    <td>{billingCycle.year}</td>
                    <td className="table-actions">
                        <button className="btn btn-warning" onClick={() => this.props.showUpdate(billingCycle)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger" onClick={() => this.props.showRemove(billingCycle)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        });
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderRows()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const MapStateToProps = state => ({ list: state.billingCycles.list });

const MapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showRemove}, dispatch);

export default connect(MapStateToProps, MapDispatchToProps)(BillingCyclesList);