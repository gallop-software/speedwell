"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const no_client_blocks_1 = __importDefault(require("./rules/no-client-blocks"));
const no_container_in_section_1 = __importDefault(require("./rules/no-container-in-section"));
const prefer_component_props_1 = __importDefault(require("./rules/prefer-component-props"));
const speedwell_1 = __importDefault(require("./configs/speedwell"));
const recommended_1 = __importDefault(require("./configs/recommended"));
const plugin = {
    meta: {
        name: 'eslint-plugin-gallop',
        version: '0.1.0',
    },
    rules: {
        'no-client-blocks': no_client_blocks_1.default,
        'no-container-in-section': no_container_in_section_1.default,
        'prefer-component-props': prefer_component_props_1.default,
    },
    configs: {
        speedwell: speedwell_1.default,
        recommended: recommended_1.default,
    },
};
module.exports = plugin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdGQUFxRDtBQUNyRCw4RkFBa0U7QUFDbEUsNEZBQWlFO0FBQ2pFLG9FQUFpRDtBQUNqRCx3RUFBcUQ7QUFFckQsTUFBTSxNQUFNLEdBQUc7SUFDYixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLE9BQU8sRUFBRSxPQUFPO0tBQ2pCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsa0JBQWtCLEVBQUUsMEJBQWM7UUFDbEMseUJBQXlCLEVBQUUsaUNBQW9CO1FBQy9DLHdCQUF3QixFQUFFLGdDQUFvQjtLQUMvQztJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxtQkFBZTtRQUMxQixXQUFXLEVBQUUscUJBQWlCO0tBQy9CO0NBQ0YsQ0FBQTtBQUVELGlCQUFTLE1BQU0sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub0NsaWVudEJsb2NrcyBmcm9tICcuL3J1bGVzL25vLWNsaWVudC1ibG9ja3MnXG5pbXBvcnQgbm9Db250YWluZXJJblNlY3Rpb24gZnJvbSAnLi9ydWxlcy9uby1jb250YWluZXItaW4tc2VjdGlvbidcbmltcG9ydCBwcmVmZXJDb21wb25lbnRQcm9wcyBmcm9tICcuL3J1bGVzL3ByZWZlci1jb21wb25lbnQtcHJvcHMnXG5pbXBvcnQgc3BlZWR3ZWxsQ29uZmlnIGZyb20gJy4vY29uZmlncy9zcGVlZHdlbGwnXG5pbXBvcnQgcmVjb21tZW5kZWRDb25maWcgZnJvbSAnLi9jb25maWdzL3JlY29tbWVuZGVkJ1xuXG5jb25zdCBwbHVnaW4gPSB7XG4gIG1ldGE6IHtcbiAgICBuYW1lOiAnZXNsaW50LXBsdWdpbi1nYWxsb3AnLFxuICAgIHZlcnNpb246ICcwLjEuMCcsXG4gIH0sXG4gIHJ1bGVzOiB7XG4gICAgJ25vLWNsaWVudC1ibG9ja3MnOiBub0NsaWVudEJsb2NrcyxcbiAgICAnbm8tY29udGFpbmVyLWluLXNlY3Rpb24nOiBub0NvbnRhaW5lckluU2VjdGlvbixcbiAgICAncHJlZmVyLWNvbXBvbmVudC1wcm9wcyc6IHByZWZlckNvbXBvbmVudFByb3BzLFxuICB9LFxuICBjb25maWdzOiB7XG4gICAgc3BlZWR3ZWxsOiBzcGVlZHdlbGxDb25maWcsXG4gICAgcmVjb21tZW5kZWQ6IHJlY29tbWVuZGVkQ29uZmlnLFxuICB9LFxufVxuXG5leHBvcnQgPSBwbHVnaW5cbiJdfQ==