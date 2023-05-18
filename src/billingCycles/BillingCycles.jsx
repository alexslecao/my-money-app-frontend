import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';

import Tabs from '../common/tab/Tabs';
import TabsContent from '../common/tab/TabsContent';
import TabContent from '../common/tab/TabContent';
import TabsHeader from '../common/tab/TabsHeader';
import TabHeader from '../common/tab/TabHeader';

import { init, create, update, remove } from "./billingCyclesAction";

import List from "./BillingCyclesList";
import Form from "./BillingCyclesForm";

class BillingCycles extends Component {

    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.create} submitLabel="Incluir" submitClass="primary" />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form onSubmit={this.props.update} submitLabel="Alterar" submitClass="info" />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form onSubmit={this.props.remove} submitLabel="Excluir" submitClass="danger" readOnly />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const MapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)

export default connect(null, MapDispatchToProps)(BillingCycles);