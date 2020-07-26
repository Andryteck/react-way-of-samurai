// import React from "react";
// import ProfileStatus from "./ProfileStatus";
// import {create} from "react-test-renderer";
//
// describe("ProfileStatus component", () => {
//     test("status from props should be in the state", () => {
//         const component = create(<ProfileStatus status='it-kamasutra'/>)
//         const root = component.root
//         expect(root.state.status).toBe('it-kamasutra')
//     });
//
//     test("after creation span should be displayed ", () => {
//         const component = create(<ProfileStatus status='it-kamasutra'/>)
//         const root = component.root
//         let span: any = root.findByType('span')
//         expect(span.length).toBe(1)
//     });
// });