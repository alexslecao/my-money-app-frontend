import React, { Component } from "react";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { init } from "./billingCyclesAction";

import LabelAndInput from "../common/form/LabelAndInput";
import Summary from "./Summary";
import ItemList from "./ItemList";

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v;
        
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        };
    }

    render() {
        const { handleSubmit, readOnly, init, credits, debts } = this.props;
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();

        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} type="text" cols="12 4" label="Nome" readOnly={readOnly}></Field>
                    <Field name="month" component={LabelAndInput} type="number" cols="12 4" label="Mês" readOnly={readOnly}></Field>
                    <Field name="year" component={LabelAndInput} type="number" cols="12 4" label="Ano" readOnly={readOnly}></Field>
                    <Summary credits={sumOfCredits} debts={sumOfDebts}/>
                    <ItemList legend="Créditos" listName="credits" cols="12 6" list={credits} readOnly={readOnly} />
                    <ItemList legend="Débitos" listName="debts" cols="12 6" list={debts} readOnly={readOnly} showStatus />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const selector = formValueSelector('billingCycleForm');

const MapStateToProps = state => ({credits: selector(state, 'credits'), debts: selector(state, 'debts')});
const MapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);
BillingCycleForm = connect(MapStateToProps, MapDispatchToProps)(BillingCycleForm);

export default BillingCycleForm;