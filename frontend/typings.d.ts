declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
// export const wrapper: string;
// export const button: string;
// export const link: string;

declare module "*.module.scss"{
    
        interface IClassNames {
          [className: string]: string
        }
        const classNames: IClassNames;
        export = classNames;
      }

declare module '*.css' {
    interface IClassNames {
      [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
  }



// declare module "*.png" 
//     const value: any;
//     export default value;
//  
//   declare module "*.svg" 
//     const value: any;
//     export default value;
//   
//   declare module "*.jpeg" 
//     const value: any;
//     export default value;
//  
//   declare module "*.jpg" 
//     const value: any;
//     export default value;
