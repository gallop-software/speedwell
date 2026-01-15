#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const audit_1 = require("./commands/audit");
const canon_1 = require("@gallop/canon");
const args = process.argv.slice(2);
const command = args[0];
// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};
function showHelp() {
    console.log(`
${colors.bold}Gallop CLI${colors.reset} - Canon Compliance Tooling
${colors.dim}Canon Version: ${canon_1.version}${colors.reset}

${colors.bold}Usage:${colors.reset}
  gallop <command> [options]

${colors.bold}Commands:${colors.reset}
  audit [path]     Check Canon compliance (default: src/blocks/)
  version          Show version information
  help             Show this help message

${colors.bold}Options:${colors.reset}
  --strict         Exit with error code on violations
  --json           Output as JSON
  --fix            Auto-fix violations where possible

${colors.bold}Examples:${colors.reset}
  gallop audit
  gallop audit src/blocks/
  gallop audit --strict
  gallop audit src/ --json
`);
}
function showVersion() {
    console.log(`Gallop CLI v1.0.0`);
    console.log(`Canon v${canon_1.version}`);
}
async function main() {
    switch (command) {
        case 'audit':
            const path = args[1] && !args[1].startsWith('--') ? args[1] : 'src/blocks/';
            const options = {
                strict: args.includes('--strict'),
                json: args.includes('--json'),
                fix: args.includes('--fix'),
            };
            await (0, audit_1.audit)(path, options);
            break;
        case 'version':
        case '-v':
        case '--version':
            showVersion();
            break;
        case 'help':
        case '-h':
        case '--help':
        case undefined:
            showHelp();
            break;
        default:
            console.error(`Unknown command: ${command}`);
            console.error(`Run 'gallop help' for usage information.`);
            process.exit(1);
    }
}
main().catch((error) => {
    console.error('Error:', error.message);
    process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsNENBQXdDO0FBQ3hDLHlDQUF1QztBQUV2QyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNsQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFdkIsNkJBQTZCO0FBQzdCLE1BQU0sTUFBTSxHQUFHO0lBQ2IsS0FBSyxFQUFFLFNBQVM7SUFDaEIsSUFBSSxFQUFFLFNBQVM7SUFDZixHQUFHLEVBQUUsU0FBUztJQUNkLEdBQUcsRUFBRSxVQUFVO0lBQ2YsS0FBSyxFQUFFLFVBQVU7SUFDakIsTUFBTSxFQUFFLFVBQVU7SUFDbEIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsT0FBTyxFQUFFLFVBQVU7SUFDbkIsSUFBSSxFQUFFLFVBQVU7Q0FDakIsQ0FBQTtBQUVELFNBQVMsUUFBUTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUM7RUFDWixNQUFNLENBQUMsSUFBSSxhQUFhLE1BQU0sQ0FBQyxLQUFLO0VBQ3BDLE1BQU0sQ0FBQyxHQUFHLGtCQUFrQixlQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUs7O0VBRWxELE1BQU0sQ0FBQyxJQUFJLFNBQVMsTUFBTSxDQUFDLEtBQUs7OztFQUdoQyxNQUFNLENBQUMsSUFBSSxZQUFZLE1BQU0sQ0FBQyxLQUFLOzs7OztFQUtuQyxNQUFNLENBQUMsSUFBSSxXQUFXLE1BQU0sQ0FBQyxLQUFLOzs7OztFQUtsQyxNQUFNLENBQUMsSUFBSSxZQUFZLE1BQU0sQ0FBQyxLQUFLOzs7OztDQUtwQyxDQUFDLENBQUE7QUFDRixDQUFDO0FBRUQsU0FBUyxXQUFXO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsZUFBTyxFQUFFLENBQUMsQ0FBQTtBQUNsQyxDQUFDO0FBRUQsS0FBSyxVQUFVLElBQUk7SUFDakIsUUFBUSxPQUFPLEVBQUUsQ0FBQztRQUNoQixLQUFLLE9BQU87WUFDVixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQTtZQUMzRSxNQUFNLE9BQU8sR0FBRztnQkFDZCxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQ2pDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDN0IsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2FBQzVCLENBQUE7WUFDRCxNQUFNLElBQUEsYUFBSyxFQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUMxQixNQUFLO1FBRVAsS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLElBQUksQ0FBQztRQUNWLEtBQUssV0FBVztZQUNkLFdBQVcsRUFBRSxDQUFBO1lBQ2IsTUFBSztRQUVQLEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxJQUFJLENBQUM7UUFDVixLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssU0FBUztZQUNaLFFBQVEsRUFBRSxDQUFBO1lBQ1YsTUFBSztRQUVQO1lBQ0UsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUE7WUFDekQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNuQixDQUFDO0FBQ0gsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pCLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgeyBhdWRpdCB9IGZyb20gJy4vY29tbWFuZHMvYXVkaXQnXG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnQGdhbGxvcC9jYW5vbidcblxuY29uc3QgYXJncyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKVxuY29uc3QgY29tbWFuZCA9IGFyZ3NbMF1cblxuLy8gQ29sb3JzIGZvciB0ZXJtaW5hbCBvdXRwdXRcbmNvbnN0IGNvbG9ycyA9IHtcbiAgcmVzZXQ6ICdcXHgxYlswbScsXG4gIGJvbGQ6ICdcXHgxYlsxbScsXG4gIGRpbTogJ1xceDFiWzJtJyxcbiAgcmVkOiAnXFx4MWJbMzFtJyxcbiAgZ3JlZW46ICdcXHgxYlszMm0nLFxuICB5ZWxsb3c6ICdcXHgxYlszM20nLFxuICBibHVlOiAnXFx4MWJbMzRtJyxcbiAgbWFnZW50YTogJ1xceDFiWzM1bScsXG4gIGN5YW46ICdcXHgxYlszNm0nLFxufVxuXG5mdW5jdGlvbiBzaG93SGVscCgpIHtcbiAgY29uc29sZS5sb2coYFxuJHtjb2xvcnMuYm9sZH1HYWxsb3AgQ0xJJHtjb2xvcnMucmVzZXR9IC0gQ2Fub24gQ29tcGxpYW5jZSBUb29saW5nXG4ke2NvbG9ycy5kaW19Q2Fub24gVmVyc2lvbjogJHt2ZXJzaW9ufSR7Y29sb3JzLnJlc2V0fVxuXG4ke2NvbG9ycy5ib2xkfVVzYWdlOiR7Y29sb3JzLnJlc2V0fVxuICBnYWxsb3AgPGNvbW1hbmQ+IFtvcHRpb25zXVxuXG4ke2NvbG9ycy5ib2xkfUNvbW1hbmRzOiR7Y29sb3JzLnJlc2V0fVxuICBhdWRpdCBbcGF0aF0gICAgIENoZWNrIENhbm9uIGNvbXBsaWFuY2UgKGRlZmF1bHQ6IHNyYy9ibG9ja3MvKVxuICB2ZXJzaW9uICAgICAgICAgIFNob3cgdmVyc2lvbiBpbmZvcm1hdGlvblxuICBoZWxwICAgICAgICAgICAgIFNob3cgdGhpcyBoZWxwIG1lc3NhZ2VcblxuJHtjb2xvcnMuYm9sZH1PcHRpb25zOiR7Y29sb3JzLnJlc2V0fVxuICAtLXN0cmljdCAgICAgICAgIEV4aXQgd2l0aCBlcnJvciBjb2RlIG9uIHZpb2xhdGlvbnNcbiAgLS1qc29uICAgICAgICAgICBPdXRwdXQgYXMgSlNPTlxuICAtLWZpeCAgICAgICAgICAgIEF1dG8tZml4IHZpb2xhdGlvbnMgd2hlcmUgcG9zc2libGVcblxuJHtjb2xvcnMuYm9sZH1FeGFtcGxlczoke2NvbG9ycy5yZXNldH1cbiAgZ2FsbG9wIGF1ZGl0XG4gIGdhbGxvcCBhdWRpdCBzcmMvYmxvY2tzL1xuICBnYWxsb3AgYXVkaXQgLS1zdHJpY3RcbiAgZ2FsbG9wIGF1ZGl0IHNyYy8gLS1qc29uXG5gKVxufVxuXG5mdW5jdGlvbiBzaG93VmVyc2lvbigpIHtcbiAgY29uc29sZS5sb2coYEdhbGxvcCBDTEkgdjEuMC4wYClcbiAgY29uc29sZS5sb2coYENhbm9uIHYke3ZlcnNpb259YClcbn1cblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgc3dpdGNoIChjb21tYW5kKSB7XG4gICAgY2FzZSAnYXVkaXQnOlxuICAgICAgY29uc3QgcGF0aCA9IGFyZ3NbMV0gJiYgIWFyZ3NbMV0uc3RhcnRzV2l0aCgnLS0nKSA/IGFyZ3NbMV0gOiAnc3JjL2Jsb2Nrcy8nXG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBzdHJpY3Q6IGFyZ3MuaW5jbHVkZXMoJy0tc3RyaWN0JyksXG4gICAgICAgIGpzb246IGFyZ3MuaW5jbHVkZXMoJy0tanNvbicpLFxuICAgICAgICBmaXg6IGFyZ3MuaW5jbHVkZXMoJy0tZml4JyksXG4gICAgICB9XG4gICAgICBhd2FpdCBhdWRpdChwYXRoLCBvcHRpb25zKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ3ZlcnNpb24nOlxuICAgIGNhc2UgJy12JzpcbiAgICBjYXNlICctLXZlcnNpb24nOlxuICAgICAgc2hvd1ZlcnNpb24oKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ2hlbHAnOlxuICAgIGNhc2UgJy1oJzpcbiAgICBjYXNlICctLWhlbHAnOlxuICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgc2hvd0hlbHAoKVxuICAgICAgYnJlYWtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKGBVbmtub3duIGNvbW1hbmQ6ICR7Y29tbWFuZH1gKVxuICAgICAgY29uc29sZS5lcnJvcihgUnVuICdnYWxsb3AgaGVscCcgZm9yIHVzYWdlIGluZm9ybWF0aW9uLmApXG4gICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgfVxufVxuXG5tYWluKCkuY2F0Y2goKGVycm9yKSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpXG4gIHByb2Nlc3MuZXhpdCgxKVxufSlcbiJdfQ==