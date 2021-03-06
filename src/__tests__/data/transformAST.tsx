import * as React from 'react';
import { externalHoc } from './transformAST_hoc';
import { ExternalInterface } from './transformAST_external';

const unexportedVar = 10;
export const exportedVar = 10;

/** unexportedVarFunction comment */
const unexportedVarFunction = (param1: string): number => 0
;
/** exportedVarFunction comment
 *
 * @tag1
 * @tag2 partA partB partC
 */
export const exportedVarFunction = (param1: number, param2: string): string => "";

function unexportedFunction(param1: number): string {
    return "";
}

function exportedFunction(param1: string, param2: number): number {
    return 0;
}

interface UnexportedInterface {
    /** prop1 comment */
    prop1: string;

    /**
     * prop2 comment
     * @tag1
     * @tag2 partA partB partC
     */
    prop2?: string;
}

/**
 * Interface comment
 * 
 * @tag1
 * @tag2 partA partB partC
 */
export interface ExportedInterface {
    /** prop1 comment */
    prop1: string;
    /** prop2 comment */
    prop2: string;
}

export interface ExportedInheritedInterface extends ExportedInterface {
    /** ownProp1 comment */
    ownProp1: string;
}

export class OurBaseClass<T1, T2> {
}

/** UnexportedClass comment */
class UnexportedClass extends OurBaseClass<ExportedInterface, {}> {
    method1(): string {
        return "";
    }
}

/** ExportedClass comment
 * @tag1 partA partB
 * @tag2
 */
export class ExportedClass {
    method1(): string {
        return "";
    }
    method2(): number {
        return 0;
    }
}

export function hoc<T>(component: T): T {
    return component;
}

/** exportedHoc1 comment */
export const exportedHoc1 = hoc(ExportedClass);

/** exportedHoc2 comment */
export const exportedHoc2 = hoc(exportedFunction);


/** exportedExternalHoc1 comment */
export const exportedExternalHoc1 = externalHoc(ExportedClass);

/** exportedExternalHoc2 comment */
export const exportedExternalHoc2 = externalHoc(exportedFunction);

/** exported intersection type
 * @tag1 partA partB
 * @tag2
 */
export type ExportedType1 = React.HTMLAttributes<HTMLImageElement> & { 
    /** the first property */
    prop1: "value1" | "value2";
    /** the second property */
    prop2: number;
 };

 /** ExportedClassWithExternalDependency comment */
export class ExportedClassWithExternalDependency extends OurBaseClass<ExternalInterface, {}> {
    method1(): string {
        return "";
    }
}