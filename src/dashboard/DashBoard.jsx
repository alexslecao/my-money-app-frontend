import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getSummary } from "./dashboardAction";

import Content from "../common/template/Content";
import ContentHeader from "../common/template/ContentHeader";
import ValueBox from '../common/widget/ValueBox';
import Row from '../common/layout/Row';

class Dashboard extends Component {
    componentWillMount() {
        this.props.getSummary();
    }

    render() {
        const { credit, debt } = this.props.summary;

        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols="12 12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos"/>
                        <ValueBox cols="12 12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos"/>
                        <ValueBox cols="12 12 4" color="blue" icon="money" value={`R$ ${credit - debt}`} text="Saldo"/>
                    </Row>
                </Content>
            </div>        
        )
    }
}

const MapStateToProps = state => {
    return {
        summary: state.dashboard.summary
    }
}

const MapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(Dashboard);