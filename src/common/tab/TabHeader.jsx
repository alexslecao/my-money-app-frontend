import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectTab } from "../tab/tabActions";
import If from "../operator/If";

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target;
        const visible = this.props.tab.visible[this.props.target];

        return (
            <If test={visible}>
                <li className={selected ? 'active' : 'a'}>
                    <a href="javascript:;" data-toggle='tab' data-target={this.props.target} onClick={() => this.props.selectTab(this.props.target)}>
                        <i className={`fa fa-${this.props.icon}`}></i>&nbsp;
                        {this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}

const MapStateToProps = state => {
    return {
        tab: state.tab
    }
} 

const MapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

export default connect(MapStateToProps, MapDispatchToProps)(TabHeader);