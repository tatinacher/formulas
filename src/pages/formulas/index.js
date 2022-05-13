import * as React from "react";
import styled from "styled-components";

import {
  FormulaCosSin,
  FormulaCtg2Plus1,
  FormulaCtgCosSin,
  FormulaTg2Plus1,
  FormulaTgCtg,
  FormulaTgSinCos,
} from "../../assets/formulas";

export const Formulas = () => {
  return (
    <FormulasBlockWrapper>
      <h1>Основные тригонометрические тождества</h1>
      <FormulasBlock>
        <ColumnWrapper>
          <FormulaWrapper>
            <FormulaCosSin />
          </FormulaWrapper>
          <FormulaWrapper data-size="S">
            <FormulaTgCtg />
          </FormulaWrapper>
        </ColumnWrapper>
        <FormulaWrapper>
          <FormulaCtg2Plus1 />
          <FormulaTg2Plus1 />
        </FormulaWrapper>
        <FormulaWrapper data-size="S">
          <FormulaTgSinCos />
          <FormulaCtgCosSin />
        </FormulaWrapper>
      </FormulasBlock>
    </FormulasBlockWrapper>
  );
};

export const FormulaWrapper = styled.div`
  svg {
    display: flex;
    height: 50px;
    width: 200px;
    margin: 0 30px 15px;
  }
  &[data-size="S"] {
    svg {
      width: 150px;
    }
  }
  &[data-size="M"] {
    svg {
      width: 200px;
    }
  }
  &[data-size="L"] {
    svg {
      width: 250px;
    }
  }
`;

export const FormulasBlock = styled.div`
  display: flex;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormulasBlockWrapper = styled.div`
  background: #fff9c4;
`;
