'use strict'

import { ClassHandler } from './class-handler'

export const isClass = (value: any): boolean => new ClassHandler(value).isClass()
export const isFunction = (value: any): boolean => new ClassHandler(value).isFunction()
