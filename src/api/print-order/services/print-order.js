'use strict';

/**
 * print-order service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::print-order.print-order');
