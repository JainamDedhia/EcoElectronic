(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_55af87._.js", {

"[project]/src/components/services/firebaseConfig.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbua898ndQs7i6mBeMAUXZJn6E2UsTQis",
    authDomain: "ewaste-b5ba9.firebaseapp.com",
    projectId: "ewaste-b5ba9",
    storageBucket: "ewaste-b5ba9.appspot.com",
    messagingSenderId: "934295179369",
    appId: "1:934295179369:android:c89527f2be9ce5300c92f8"
};
// Ensure Firebase isn't initialized multiple times
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const VolunteerOverview = ({ volunteers })=>{
    if (!volunteers || volunteers.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "grid grid-cols-4 gap-4 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded shadow text-center",
                    children: "Total Volunteers: 0"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded shadow text-center",
                    children: "Active: 0"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded shadow text-center",
                    children: "Pending Approval: 0"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded shadow text-center",
                    children: "Tasks Today: 0"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
            lineNumber: 19,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "grid grid-cols-4 gap-4 mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-4 rounded shadow text-center",
                children: [
                    "Total Volunteers: ",
                    volunteers.length
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-4 rounded shadow text-center",
                children: [
                    "Active: ",
                    volunteers.filter((v)=>v.status === "Active").length
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-4 rounded shadow text-center",
                children: [
                    "Pending Approval: ",
                    volunteers.filter((v)=>v.status === "Pending").length
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-4 rounded shadow text-center",
                children: "Tasks Today: 5"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx",
        lineNumber: 29,
        columnNumber: 7
    }, this);
};
_c = VolunteerOverview;
const __TURBOPACK__default__export__ = VolunteerOverview;
var _c;
__turbopack_refresh__.register(_c, "VolunteerOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
 // import React from "react";
 // interface Volunteer {
 //   id: string;
 //   name: string;
 //   email: string;
 //   status: string;
 // }
 // interface VolunteerOverviewProps {
 //   volunteers: Volunteer[];
 // }
 // const VolunteerOverview: React.FC<VolunteerOverviewProps> = ({ volunteers }) => {
 //   if (!volunteers || volunteers.length === 0) {
 //     return (
 //       <section className="grid grid-cols-4 gap-4 mb-6">
 //         <div className="bg-white p-4 rounded shadow text-center">Total Volunteers: 0</div>
 //         <div className="bg-white p-4 rounded shadow text-center">Active: 0</div>
 //         <div className="bg-white p-4 rounded shadow text-center">Pending Approval: 0</div>
 //         <div className="bg-white p-4 rounded shadow text-center">Tasks Today: 0</div>
 //       </section>
 //     );
 //   }
 //   return (
 //     <section className="grid grid-cols-4 gap-4 mb-6">
 //       <div className="bg-white p-4 rounded shadow text-center">
 //         Total Volunteers: {volunteers.length}
 //       </div>
 //       <div className="bg-white p-4 rounded shadow text-center">
 //         Active: {volunteers.filter((v) => v.status === "Active").length}
 //       </div>
 //       <div className="bg-white p-4 rounded shadow text-center">
 //         Pending Approval: {volunteers.filter((v) => v.status === "Pending").length}
 //       </div>
 //       <div className="bg-white p-4 rounded shadow text-center">
 //         Tasks Today: 5
 //       </div>
 //     </section>
 //   );
 // };
 // export default VolunteerOverview;
}}),
"[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const VolunteerTable = ({ volunteers = [], handleDelete })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white p-4 rounded shadow mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Volunteers List"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full border-collapse border border-gray-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "bg-gray-200 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border border-gray-300 p-2",
                                    children: "Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border border-gray-300 p-2",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border border-gray-300 p-2",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border border-gray-300 p-2",
                                    children: "Points"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border border-gray-300 p-2",
                                    children: "Tasks"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "border border-gray-300 p-2",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: volunteers.length > 0 ? volunteers.map((volunteer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border border-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-2",
                                        children: volunteer.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-2",
                                        children: volunteer.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: `p-2 ${volunteer.status === "Active" ? "text-green-600" : "text-red-600"}`,
                                        children: volunteer.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-2",
                                        children: volunteer.points
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-2",
                                        children: volunteer.tasks && volunteer.tasks.length > 0 ? volunteer.tasks.join(", ") : "None"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-blue-500 text-white px-3 py-1 rounded mr-2",
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-red-500 text-white px-3 py-1 rounded",
                                                onClick: ()=>handleDelete(volunteer.id),
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, volunteer.id, true, {
                                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 6,
                                className: "text-center py-4 text-gray-500",
                                children: "No Volunteers Found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_c = VolunteerTable;
const __TURBOPACK__default__export__ = VolunteerTable;
var _c;
__turbopack_refresh__.register(_c, "VolunteerTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
 // import React from "react";
 // interface Volunteer {
 //   id: string;
 //   name: string;
 //   email: string;
 //   status: string;
 //   points: number;
 //   tasks: string[];
 // }
 // interface VolunteerTableProps {
 //   volunteers: Volunteer[];
 //   handleDelete: (id: string) => void;
 // }
 // const VolunteerTable: React.FC<VolunteerTableProps> = ({ volunteers, handleDelete }) => {
 //   return (
 //     <section className="bg-white p-4 rounded shadow mb-6">
 //       <h2 className="text-xl font-semibold mb-4">Volunteers List</h2>
 //       <table className="w-full">
 //         <thead>
 //           <tr className="bg-gray-200">
 //             <th>Name</th>
 //             <th>Email</th>
 //             <th>Status</th>
 //             <th>Points</th>
 //             <th>Tasks</th>
 //             <th>Actions</th>
 //           </tr>
 //         </thead>
 //         <tbody>
 //           {volunteers.length > 0 ? (
 //             volunteers.map((volunteer) => (
 //               <tr key={volunteer.id} className="border-t">
 //                 <td>{volunteer.name}</td>
 //                 <td>{volunteer.email}</td>
 //                 <td className={volunteer.status === "Active" ? "text-green-600" : "text-red-600"}>
 //                   {volunteer.status}
 //                 </td>
 //                 <td>{volunteer.points}</td>
 //                 <td>{volunteer.tasks.length > 0 ? volunteer.tasks.join(", ") : "None"}</td>
 //                 <td>
 //                   <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
 //                   <button
 //                     className="bg-red-500 text-white px-2 py-1 rounded ml-2"
 //                     onClick={() => handleDelete(volunteer.id)}
 //                   >
 //                     Delete
 //                   </button>
 //                 </td>
 //               </tr>
 //             ))
 //           ) : (
 //             <tr>
 //               <td colSpan={6} className="text-center py-4">
 //                 No Volunteers Found
 //               </td>
 //             </tr>
 //           )}
 //         </tbody>
 //       </table>
 //     </section>
 //   );
 // };
 // export default VolunteerTable;
}}),
"[project]/src/components/services/volunteerservices.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Temporary mock volunteer service
// let volunteers = [
//   { id: "1", name: "John Doe", email: "john@example.com", status: "Pending" },
//   { id: "2", name: "Jane Smith", email: "jane@example.com", status: "Approved" },
// ];
// // Get all volunteers
// export const getVolunteers = async () => {
//   return [...volunteers]; // Return a copy to prevent mutation
// };
// // Add a new volunteer
// export const addVolunteer = async (newVolunteer: { name: string; email: string; status: string }) => {
//   const id = String(volunteers.length + 1); // Simulating an auto-increment ID
//   volunteers.push({ id, ...newVolunteer });
// };
// // Delete a volunteer by ID
// export const deleteVolunteer = async (id: string) => {
//   volunteers = volunteers.filter((v) => v.id !== id);
// };
// import { db } from "./firebaseConfig";
// import { collection, addDoc } from "firebase/firestore";
// export const addVolunteer = async (volunteer: { name: string; email: string; status: string }) => {
//   try {
//     const docRef = await addDoc(collection(db, "Volunteers"), volunteer);
//     console.log("Volunteer added with ID: ", docRef.id);
//   } catch (error) {
//     console.error("Error adding volunteer: ", error);
//     throw error;
//   }
// };
__turbopack_esm__({
    "addVolunteer": (()=>addVolunteer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/services/firebaseConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
const addVolunteer = async (volunteerData)=>{
    try {
        const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "Volunteers"), volunteerData);
        console.log("Volunteer added successfully:", docRef.id);
        return {
            success: true,
            id: docRef.id
        };
    } catch (error) {
        console.error("Error adding volunteer:", error);
        return {
            success: false,
            error
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/VolunteerManage/volunteers/AddVolunteers/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$volunteerservices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/services/volunteerservices.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const AddVolunteer = ({ refreshData })=>{
    _s();
    const [newVolunteer, setNewVolunteer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    const handleAddVolunteer = async ()=>{
        if (!newVolunteer.name || !newVolunteer.email) {
            alert("Please fill in both name and email!");
            return;
        }
        try {
            console.log("Adding volunteer:", newVolunteer); // Debugging log
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$volunteerservices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addVolunteer"])(newVolunteer);
            setNewVolunteer({
                name: "",
                email: ""
            }); // Reset input fields
            refreshData(); // Ensure data is refreshed
            alert("Volunteer added successfully!");
        } catch (error) {
            console.error("Error adding volunteer:", error);
            alert("Failed to add volunteer!");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white p-4 rounded shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4",
                children: "Add Volunteer"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/AddVolunteers/page.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Name",
                className: "border p-2 mb-2 w-full",
                value: newVolunteer.name,
                onChange: (e)=>setNewVolunteer({
                        ...newVolunteer,
                        name: e.target.value
                    })
            }, void 0, false, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/AddVolunteers/page.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "email",
                placeholder: "Email",
                className: "border p-2 mb-2 w-full",
                value: newVolunteer.email,
                onChange: (e)=>setNewVolunteer({
                        ...newVolunteer,
                        email: e.target.value
                    })
            }, void 0, false, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/AddVolunteers/page.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-green-600 text-white px-4 py-2 rounded",
                onClick: handleAddVolunteer,
                children: "Add Volunteer"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/VolunteerManage/volunteers/AddVolunteers/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/VolunteerManage/volunteers/AddVolunteers/page.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
};
_s(AddVolunteer, "j0kOgcYwfr5/BLOVBT/5pRcHmaU=");
_c = AddVolunteer;
const __TURBOPACK__default__export__ = AddVolunteer;
var _c;
__turbopack_refresh__.register(_c, "AddVolunteer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/SideBar/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_refresh__.signature();
'use client'; // Place this at the very top
;
;
;
const SideBar = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])(); // Get the current route
    const isActive = (path)=>pathname === path ? "bg-gray-700 text-green-400" : "text-white";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 bg-[#2A3042] p-5 flex flex-col min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-green-400 mb-6",
                children: "Admin Panel"
            }, void 0, false, {
                fileName: "[project]/src/components/SideBar/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: `flex items-center gap-2 p-3 rounded ${isActive("/")}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SideBar/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            " Live Stats"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SideBar/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/VolunteerManage",
                        className: `flex items-center gap-2 p-3 rounded ${isActive("/admin/VolunteerManage")}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SideBar/page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            " Volunteer Management"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SideBar/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SideBar/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SideBar/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_s(SideBar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SideBar;
const __TURBOPACK__default__export__ = SideBar;
var _c;
__turbopack_refresh__.register(_c, "SideBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/VolunteerManage/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// "use client";
// import React, { useEffect, useState } from "react";
// import UserSideBar from "../../../components/SideBar/page";
// import { FiBell, FiSearch } from "react-icons/fi";
// import { Bar } from "recharts";
// import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import VolunteerOverview from "../../../app/admin/VolunteerManage/volunteers/VolunteerOverview/page";
// import VolunteerTable from "../../../app/admin/VolunteerManage/volunteers/VolunteerTable/page";
// import AddVolunteer from "../../../app/admin/VolunteerManage/volunteers/AddVolunteers/page";
// import SideBar from "../../../components/SideBar/page";
// interface Volunteer {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   status: string;
//   points: number;
//   tasks: string[];
// }
// const VolunteerManagement = () => {
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortType, setSortType] = useState("name");
//   // Fetch Volunteers
//   const fetchVolunteers = async () => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     setVolunteers([
//       { id: "1", name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Pending", points: 0, tasks: [] },
//       { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", status: "Active", points: 10, tasks: ["Task 1"] }
//     ]);
//   };
//   useEffect(() => {
//     fetchVolunteers();
//   }, []);
//   // Delete Volunteer
//   const handleDelete = (id: string) => {
//     setVolunteers((prev) => prev.filter((v) => v.id !== id));
//   };
//   // Filter & Sort
//   const filteredVolunteers = volunteers.filter((v) =>
//     v.name.toLowerCase().includes(search.toLowerCase()) && (filterStatus === "All" || v.status === filterStatus)
//   ).sort((a, b) => (sortType === "points" ? b.points - a.points : a.name.localeCompare(b.name)));
//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       <SideBar />
//       <div className="flex-1 p-6 space-y-6">
//         {/* Header */}
//         <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
//           <div className="relative w-72">
//             <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
//             <input
//               type="search"
//               placeholder="Search volunteers..."
//               className="border rounded-lg pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           <select className="border p-2 rounded-lg" onChange={(e) => setFilterStatus(e.target.value)}>
//             <option value="All">All</option>
//             <option value="Active">Active</option>
//             <option value="Pending">Pending</option>
//           </select>
//           <select className="border p-2 rounded-lg" onChange={(e) => setSortType(e.target.value)}>
//             <option value="name">Sort by Name</option>
//             <option value="points">Sort by Points</option>
//           </select>
//           <FiBell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
//         </div>
//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="md:col-span-2">
//             <VolunteerOverview volunteers={filteredVolunteers} />
//             <VolunteerTable 
//               volunteers={filteredVolunteers} 
//               handleDelete={handleDelete} 
//             />
//           </div>
//           <div>
//             <AddVolunteer refreshData={fetchVolunteers} />
//           </div>
//         </div>
// {/* Stats Section */}
// <div className="bg-white shadow rounded-lg p-4">
//   <h2 className="text-xl font-bold mb-4">Volunteer Statistics</h2>
//   <ResponsiveContainer width="100%" height={300}>
//     <BarChart data={volunteers.map(v => ({ name: v.name, points: v.points }))}>
//       <XAxis dataKey="name" stroke="#8884d8" />
//       <YAxis />
//       <Tooltip />
//       <Bar dataKey="points" fill="#4A90E2" barSize={40} />
//     </BarChart>
//   </ResponsiveContainer>
// </div>
// </div>
// </div>
// );
// };
// export default VolunteerManagement;
// "use client";
// import React, { useEffect, useState } from "react";
// import { db } from "../../../components/services/firebaseConfig"; // Import Firestore
// import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
// import { FiBell, FiSearch } from "react-icons/fi";
// import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar } from "recharts";
// import VolunteerOverview from "../../../app/admin/VolunteerManage/volunteers/VolunteerOverview/page";
// import VolunteerTable from "../../../app/admin/VolunteerManage/volunteers/VolunteerTable/page";
// import;
//   status?: string; // Make status optional
//   points: number;
//   tasks: string[];
// }
// const VolunteerManagement = () => {
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]); // Ensure volunteers is always an array
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortType, setSortType] = useState("name");
//   // 🔥 Fetch Volunteers from Firestore
//   const fetchVolunteers = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "Volunteers"));
//       const volunteersData = querySnapshot.docs.map((doc) => {
//         const data = doc.data() as Volunteer;
//         return {
//           id: doc.id,
//           name: data.name || "Unknown",
//           email: data.email || "No Email",
//           phone: data.phone || "No Phone",
//           status: data.status || "Pending", // Default to "Pending" if status is missing
//           points: data.points || 0,
//           tasks: data.tasks || [],
//         };
//       });
//       setVolunteers(volunteersData);
//     } catch (error) {
//       console.error("Error fetching volunteers:", error);
//     }
//   };
//   useEffect(() => {
//     fetchVolunteers();
//   }, []);
//   // 🔥 Delete Volunteer from Firestore
//   const handleDelete = async (id: string) => {
//     try {
//       await deleteDoc(doc(db, "Volunteers", id));
//       setVolunteers((prev) => prev.filter((v) => v.id !== id));
//     } catch (error) {
//       console.error("Error deleting volunteer:", error);
//     }
//   };
//   // Filter & Sort
//   const filteredVolunteers: Volunteer[] = (volunteers || [])
//   .filter((v) =>
//     v.name.toLowerCase().includes(search.toLowerCase()) &&
//     (filterStatus === "All" || v.status === filterStatus)
//   )
//   .sort((a, b) =>
//     sortType === "points" ? b.points - a.points : a.name.localeCompare(b.name)
//   );
//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       <SideBar />
//       <div className="flex-1 p-6 space-y-6">
//         {/* Header */}
//         <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
//           <div className="relative w-72">
//             <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
//             <input
//               type="search"
//               placeholder="Search volunteers..."
//               className="border rounded-lg pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           <select className="border p-2 rounded-lg" onChange={(e) => setFilterStatus(e.target.value)}>
//             <option value="All">All</option>
//             <option value="Active">Active</option>
//             <option value="Pending">Pending</option>
//           </select>
//           <select className="border p-2 rounded-lg" onChange={(e) => setSortType(e.target.value)}>
//             <option value="name">Sort by Name</option>
//             <option value="points">Sort by Points</option>
//           </select>
//           <FiBell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
//         </div>
//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="md:col-span-2">
//           <VolunteerOverview volunteers={filteredVolunteers ?? []} />
//           <VolunteerTable volunteers={filteredVolunteers ?? []} handleDelete={handleDelete} />
//           </div>
//           <div>
//             <AddVolunteer refreshData={fetchVolunteers} />
//           </div>
//         </div>
//         {/* Stats Section */}
//         <div className="bg-white shadow rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Volunteer Statistics</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={volunteers.map((v) => ({ name: v.name, points: v.points }))}>
//               <XAxis dataKey="name" stroke="#8884d8" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="points" fill="#4A90E2" barSize={40} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default VolunteerManagement; AddVolunteer from "../../../app/admin/VolunteerManage/volunteers/AddVolunteers/page";
// import SideBar from "../../../components/SideBar/page";
// interface Volunteer {
//   id: string;
//   name: string;
//   email: string;
//   phone: string
// "use client";
// import React, { useEffect, useState } from "react";
// import { db } from "../../../components/services/firebaseConfig"; // Firestore import
// import { collection, getDocs, doc, updateDoc, deleteDoc,setDoc,getDoc} from "firebase/firestore";
// import { FiBell, FiSearch, FiX } from "react-icons/fi";
// import { BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Bar } from "recharts";
// import VolunteerOverview from "../../../app/admin/VolunteerManage/volunteers/VolunteerOverview/page";
// import VolunteerTable from "../../../app/admin/VolunteerManage/volunteers/VolunteerTable/page";
// import AddVolunteer from "../../../app/admin/VolunteerManage/volunteers/AddVolunteers/page";
// import SideBar from "../../../components/SideBar/page";
// import { query, where } from "firebase/firestore";
// // import { doc, updateDoc, collection, getDocs, setDoc, query, where } from "firebase/firestore";
// interface Volunteer {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   status?: string;
//   points: number;
//   tasks: string[];
// }
// interface CollaborationRequest {
//   id: string;
//   agency: string;
//   status: string;
// }
// // State and function to handle notifications
// const VolunteerManagement = () => {
//   const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
//   const [search, setSearch] = useState("");
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortType, setSortType] = useState("name");
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [collabRequests, setCollabRequests] = useState<CollaborationRequest[]>([]);
//   // 🔥 Fetch Volunteers from Firestore
//   const fetchVolunteers = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "Volunteers"));
//       const volunteersData = querySnapshot.docs.map((doc) => {
//         const data = doc.data() as Volunteer;
//         return {
//           id: doc.id,
//           name: data.name || "Unknown",
//           email: data.email || "No Email",
//           phone: data.phone || "No Phone",
//           status: data.status || "Pending",
//           points: data.points || 0,
//           tasks: data.tasks || [],
//         };
//       });
//       setVolunteers(volunteersData);
//     } catch (error) {
//       console.error("Error fetching volunteers:", error);
//     }
//   };
//   // 🔥 Fetch Collaboration Requests (Only from XYZ Agency)
//   const fetchCollabRequests = () => {
//     // 🔥 Static Collaboration Requests (No Firebase)
//     const staticRequests: CollaborationRequest[] = [
//       { id: "101", agency: "XYZ Agency", status: "Pending" },
//       { id: "102", agency: "ABC Foundation", status: "Pending" },
//     ];
//     setCollabRequests(staticRequests);
//   };
//   // 🔥 Call static fetch inside useEffect
//   useEffect(() => {
//     fetchVolunteers(); // If you want volunteers to stay dynamic, keep this
//     fetchCollabRequests(); // Now loads static data
//   }, []);
//   // 🔥 Accept Request and Fetch Volunteers
//   const acceptRequest = async () => {
//     try {
//       // 1️⃣ Get the first request from "collabReq"
//       const querySnapshot = await getDocs(collection(db, "collabReq"));
//       if (querySnapshot.empty) {
//         console.error("No collaboration request found!");
//         return;
//       }
//       const requestDoc = querySnapshot.docs[0]; // First (only) request
//       const requestId = requestDoc.id; // Extract request ID
//       // 2️⃣ Update the request status
//       await updateDoc(doc(db, "collabReq", requestId), { status: "Assigned" });
//       // 3️⃣ Fetch volunteers from "collabVol"
//       const collabVolSnapshot = await getDocs(
//         query(collection(db, "collabVol"), where("requestId", "==", requestId))
//       );
//       if (collabVolSnapshot.empty) {
//         console.warn("No volunteers found for this request.");
//         return;
//       }
//       const newVolunteers = collabVolSnapshot.docs.map((doc) => ({
//         id: doc.id, // Ensure ID is included
//         ...doc.data(),
//       })) as Volunteer[];
//       console.log("Fetched Volunteers:", newVolunteers); // Debugging Log
//       // 4️⃣ Add fetched volunteers to "Volunteers" collection
//       for (const volunteer of newVolunteers) {
//         const volunteerRef = doc(db, "Volunteers", volunteer.id); // ✅ Correct document reference
//         // Check if volunteer already exists
//         const volunteerSnap = await getDoc(volunteerRef);
//         if (volunteerSnap.exists()) {
//           await updateDoc(volunteerRef, volunteer); // ✅ Update existing volunteer
//         } else {
//           await setDoc(volunteerRef, volunteer); // ✅ Add new volunteer
//         }
//       }
//       console.log("Volunteers successfully added to Firestore!"); // Debugging Log
//       // 5️⃣ Refresh the UI
//       setTimeout(() => {
//         fetchVolunteers();  // Ensure UI updates
//         fetchCollabRequests();
//       }, 1000); // Small delay to allow Firestore to update
//     } catch (error) {
//       console.error("Error accepting request:", error);
//     }
//   };
//   // ❌ Decline Request
//   const declineRequest = async () => {
//     try {
//       // ✅ Delete the only document in "collabReq"
//       const querySnapshot = await getDocs(collection(db, "collabReq"));
//       if (querySnapshot.empty) {
//         console.warn("No request found to decline.");
//         return;
//       }
//       const requestId = querySnapshot.docs[0].id;
//       await deleteDoc(doc(db, "collabReq", requestId));
//       // ✅ Update UI
//       setCollabRequests([]);
//     } catch (error) {
//       console.error("Error declining request:", error);
//     }
//   };
//   // 🔥 Delete Volunteer from Firestore
//   const handleDelete = async (id: string) => {
//     try {
//       await deleteDoc(doc(db, "Volunteers", id));
//       setVolunteers((prev) => prev.filter((v) => v.id !== id));
//     } catch (error) {
//       console.error("Error deleting volunteer:", error);
//     }
//   };
//   // 🔍 Filter & Sort Volunteers
//   const filteredVolunteers: Volunteer[] = (volunteers || [])
//     .filter(
//       (v) =>
//         v.name.toLowerCase().includes(search.toLowerCase()) &&
//         (filterStatus === "All" || v.status === filterStatus)
//     )
//     .sort((a, b) => (sortType === "points" ? b.points - a.points : a.name.localeCompare(b.name)));
//   return (
//     <div className="min-h-screen flex bg-gray-50">
//       <SideBar />
//       <div className="flex-1 p-6 space-y-6">
//         {/* Header */}
//         <div className="bg-white shadow rounded-lg p-4 flex justify-between items-center">
//           <div className="relative w-72">
//             <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
//             <input
//               type="search"
//               placeholder="Search volunteers..."
//               className="border rounded-lg pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//           <FiBell
//             className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600"
//             onClick={() => setDrawerOpen(true)}
//           />
//         </div>
//         {/* Side Drawer for Collaboration Requests */}
// {drawerOpen && (
//   <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg p-4 overflow-y-auto">
//     <div className="flex justify-between items-center mb-4">
//       <h2 className="text-xl font-semibold">Collaboration Requests</h2>
//       <FiX className="w-6 h-6 cursor-pointer" onClick={() => setDrawerOpen(false)} />
//     </div>
//     {/* If no pending requests */}
//     {collabRequests.length === 0 ? (
//       <p className="text-gray-500">No pending requests.</p>
//     ) : (
//       // Only display the first (or only) request
//       (() => {
//         const request = collabRequests[0]; // Get the first request
//         return (
//           <div key={request.id} className="bg-gray-100 p-3 rounded-lg mb-2">
//             <h3 className="font-semibold">{request.agency}</h3>
//             <p className="text-sm text-gray-600">Collaboration Request</p>
//             <div className="flex justify-between mt-2">
//               <button
//                 className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
//                 onClick={() => {
//                   acceptRequest(); // Call function without needing request.id
//                   setDrawerOpen(false); // Close drawer after accepting
//                 }}
//               >
//                 Accept
//               </button>
//               <button
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
//                 onClick={() => {
//                   declineRequest(); // Call function without needing request.id
//                   setDrawerOpen(false); // Close drawer after declining
//                 }}
//               >
//                 Decline
//               </button>
//             </div>
//           </div>
//         );
//       })()
//     )}
//   </div>
// )}
//         {/* Existing Content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="md:col-span-2">
//             <VolunteerOverview volunteers={filteredVolunteers ?? []} />
//             <VolunteerTable volunteers={filteredVolunteers ?? []} handleDelete={handleDelete} />
//           </div>
//           <div>
//             <AddVolunteer refreshData={fetchVolunteers} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default VolunteerManagement;
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/services/firebaseConfig.ts [app-client] (ecmascript)"); // Import Firestore
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$VolunteerManage$2f$volunteers$2f$VolunteerOverview$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/admin/VolunteerManage/volunteers/VolunteerOverview/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$VolunteerManage$2f$volunteers$2f$VolunteerTable$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/admin/VolunteerManage/volunteers/VolunteerTable/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$VolunteerManage$2f$volunteers$2f$AddVolunteers$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/admin/VolunteerManage/volunteers/AddVolunteers/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideBar$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/SideBar/page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
const VolunteerManagement = ()=>{
    _s();
    const [volunteers, setVolunteers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [sortType, setSortType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("name");
    // 🔥 Fetch Volunteers from Firestore
    const fetchVolunteers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VolunteerManagement.useCallback[fetchVolunteers]": async ()=>{
            try {
                const querySnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "collabVol"));
                const volunteersData = querySnapshot.docs.map({
                    "VolunteerManagement.useCallback[fetchVolunteers].volunteersData": (doc)=>{
                        const data = doc.data();
                        return {
                            id: doc.id,
                            name: data.name || "Unknown",
                            email: data.email || "No Email",
                            phone: data.phone || "No Phone",
                            status: data.status || "Pending",
                            points: data.points || 0,
                            tasks: Array.isArray(data.tasks) ? data.tasks : []
                        };
                    }
                }["VolunteerManagement.useCallback[fetchVolunteers].volunteersData"]);
                setVolunteers(volunteersData);
            } catch (error) {
                console.error("Error fetching volunteers:", error);
            }
        }
    }["VolunteerManagement.useCallback[fetchVolunteers]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VolunteerManagement.useEffect": ()=>{
            fetchVolunteers();
        }
    }["VolunteerManagement.useEffect"], [
        fetchVolunteers
    ]);
    // 🔥 Add Volunteer to Firestore
    const handleAddVolunteer = async (newVolunteer)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "collabVol"), {
                name: newVolunteer.name,
                email: newVolunteer.email,
                phone: newVolunteer.phone || "No Phone",
                status: newVolunteer.status || "Pending",
                points: newVolunteer.points || 0,
                tasks: newVolunteer.tasks || []
            });
            fetchVolunteers(); // Refresh data after adding
        } catch (error) {
            console.error("Error adding volunteer:", error);
        }
    };
    // 🔥 Delete Volunteer from Firestore
    const handleDelete = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$services$2f$firebaseConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "collabVol", id));
            setVolunteers((prev)=>prev.filter((v)=>v.id !== id));
        } catch (error) {
            console.error("Error deleting volunteer:", error);
        }
    };
    // Filter & Sort Volunteers
    const filteredVolunteers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VolunteerManagement.useMemo[filteredVolunteers]": ()=>{
            return volunteers.filter({
                "VolunteerManagement.useMemo[filteredVolunteers]": (v)=>v.name.toLowerCase().includes(search.toLowerCase()) && (filterStatus === "All" || v.status === filterStatus)
            }["VolunteerManagement.useMemo[filteredVolunteers]"]).sort({
                "VolunteerManagement.useMemo[filteredVolunteers]": (a, b)=>sortType === "points" ? b.points - a.points : a.name.localeCompare(b.name)
            }["VolunteerManagement.useMemo[filteredVolunteers]"]);
        }
    }["VolunteerManagement.useMemo[filteredVolunteers]"], [
        volunteers,
        search,
        filterStatus,
        sortType
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SideBar$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow rounded-lg p-4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-72",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
                                        className: "absolute left-3 top-2.5 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                        lineNumber: 639,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "search",
                                        placeholder: "Search volunteers...",
                                        className: "border rounded-lg pl-10 pr-4 py-2 w-full focus:ring-2 focus:ring-blue-500",
                                        value: search,
                                        onChange: (e)=>setSearch(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                        lineNumber: 640,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 638,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "statusFilter",
                                className: "sr-only",
                                children: "Filter by Status"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "statusFilter",
                                className: "border p-2 rounded-lg",
                                onChange: (e)=>setFilterStatus(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "All",
                                        children: "All"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                        lineNumber: 650,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Active",
                                        children: "Active"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Pending",
                                        children: "Pending"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "sortType",
                                className: "sr-only",
                                children: "Sort Volunteers"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 654,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "sortType",
                                className: "border p-2 rounded-lg",
                                onChange: (e)=>setSortType(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "name",
                                        children: "Sort by Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                        lineNumber: 656,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "points",
                                        children: "Sort by Points"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                        lineNumber: 657,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 655,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBell"], {
                                className: "w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 659,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                        lineNumber: 637,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$VolunteerManage$2f$volunteers$2f$VolunteerOverview$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        volunteers: filteredVolunteers
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                        lineNumber: 665,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$VolunteerManage$2f$volunteers$2f$VolunteerTable$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        volunteers: filteredVolunteers,
                                        handleDelete: handleDelete
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                        lineNumber: 666,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 664,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$VolunteerManage$2f$volunteers$2f$AddVolunteers$2f$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    handleAddVolunteer: handleAddVolunteer
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                    lineNumber: 669,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 668,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                        lineNumber: 663,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-4",
                                children: "Volunteer Statistics"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 675,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                width: "100%",
                                height: 300,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                    data: filteredVolunteers.map((v)=>({
                                            name: v.name,
                                            points: v.points
                                        })),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                            dataKey: "name",
                                            stroke: "#8884d8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                            lineNumber: 678,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                            fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                            lineNumber: 679,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                            fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                            lineNumber: 680,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                            dataKey: "points",
                                            fill: "#4A90E2",
                                            barSize: 40
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                            lineNumber: 681,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                    lineNumber: 677,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                                lineNumber: 676,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                        lineNumber: 674,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
                lineNumber: 635,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/VolunteerManage/page.tsx",
        lineNumber: 633,
        columnNumber: 5
    }, this);
};
_s(VolunteerManagement, "rcYZFd+gz/S/T7RX4icC5VgNJEI=");
_c = VolunteerManagement;
const __TURBOPACK__default__export__ = VolunteerManagement;
var _c;
__turbopack_refresh__.register(_c, "VolunteerManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/VolunteerManage/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_55af87._.js.map