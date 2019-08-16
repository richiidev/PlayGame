function initTooltip() {
    jQuery(document).ready(function ($) {
        $('[data-toggle="tooltip-success"]').tooltip({
            template: '<div class="tooltip" role="tooltip"><style>.arrow::before {border-bottom-color: #28a745!important}</style><div class="arrow"></div><div class="tooltip-inner bg-success"></div></div>'
        });
        $('[data-toggle="tooltip-warning"]').tooltip({
            template: '<div class="tooltip" role="tooltip"><style>.arrow::before {border-bottom-color: #ffc107!important}</style><div class="arrow"></div><div class="tooltip-inner bg-warning dark-font"></div></div>'
        });
        $('[data-toggle="tooltip-info"]').tooltip({
            template: '<div class="tooltip" role="tooltip"><style>.arrow::before {border-bottom-color: #17a2b8!important}</style><div class="arrow"></div><div class="tooltip-inner bg-info"></div></div>'
        });
        $('[data-toggle="tooltip-secondary"]').tooltip({
            template: '<div class="tooltip" role="tooltip"><style>.arrow::before {border-bottom-color: #6c757d!important}</style><div class="arrow"></div><div class="tooltip-inner bg-secondary"></div></div>'
        });
        $('[data-toggle="tooltip-danger"]').tooltip({
            template: '<div class="tooltip" role="tooltip"><style>.arrow::before {border-bottom-color: #dc3545!important}</style><div class="arrow"></div><div class="tooltip-inner bg-danger"></div></div>'
        });

    });
}