import React from "react";

import Grid from "../common/layout/Grid";
import Row from "../common/layout/Row";
import ValueBox from "../common/widget/ValueBox";

export default ({credits, debts}) => (
    <Grid cols="12">
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credits}`} text="Total de Créditos" />
                <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debts}`} text="Total de Débitos" />
                <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credits - debts}`} text="Total Consolidado" />
            </Row>
        </fieldset>
    </Grid>
)