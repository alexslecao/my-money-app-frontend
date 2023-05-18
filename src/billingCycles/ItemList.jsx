import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, arrayInsert, arrayRemove } from "redux-form";

import Grid from '../common/layout/Grid';
import Input from '../common/form/Input';
import If from '../common/operator/If';

class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.listName, index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.listName, index)
        }
    }

    renderRows() {
        const list = this.props.list || [{}];

        console.log(list)

        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${this.props.listName}[${index}].name`} component={Input} placeholder="Informe o Nome" readOnly={this.props.readOnly}></Field>
                </td>
                <td>
                    <Field name={`${this.props.listName}[${index}].value`} type="number" component={Input} placeholder="Informe o Valor" readOnly={this.props.readOnly}></Field>
                </td>
                <If test={this.props.showStatus}>
                    <td>
                        <Field name={`${this.props.listName}[${index}].status`} component={Input} placeholder="Informe o Status" readOnly={this.props.readOnly}></Field>
                    </td>
                </If>
                <td className="table-actions">
                    <button type="button" className="btn btn-success" onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}><th>Status</th></If>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const MapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, MapDispatchToProps)(ItemList);