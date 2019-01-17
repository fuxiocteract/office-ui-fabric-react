import { IButtonProps } from '../../Button';
import { IStyle, ITheme } from '../../Styling';
import { IRefObject, IStyleFunctionOrObject } from '../../Utilities';
import { DocumentCardActionsBase } from './DocumentCardActions.base';

export interface IDocumentCardActions {}

export interface IDocumentCardActionsProps extends React.ClassAttributes<DocumentCardActionsBase> {
  /**
   * Gets the component ref.
   */
  componentRef?: IRefObject<IDocumentCardActions>;

  /**
   * The actions available for this document.
   */
  actions: IButtonProps[];

  /**
   * The number of views this document has received.
   */
  views?: Number;

  /**
   * Call to provide customized styling that will layer on top of the variant rules
   */
  styles?: IStyleFunctionOrObject<IDocumentCardActionsStyleProps, IDocumentCardActionsStyles>;

  /**
   * Theme provided by HOC.
   */
  theme?: ITheme;

  /**
   * Optional override class name
   */
  className?: string;
}

export interface IDocumentCardActionsStyleProps {
  /**
   * Accept theme prop.
   */
  theme: ITheme;

  /**
   * Optional override class name
   */
  className?: string;
}

export interface IDocumentCardActionsStyles {
  root: IStyle;
  action: IStyle;
  views: IStyle;
  viewsIcon: IStyle;
}