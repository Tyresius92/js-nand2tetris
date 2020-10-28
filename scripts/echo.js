const args = process.argv;
const mssg = args[2];

const opts = ['-s', '--set', '-b', '--bg-color', '-f', '--font-color'];

function escapeAnsiCode(code) {
  return '\x1b[' + code + 'm';
}

const ansiStyles = opts.map(function (opt) {
  return args.indexOf(opt) > -1
    ? escapeAnsiCode(args[args.indexOf(opt) + 1])
    : '';
});

console.log('%s%s%s', ansiStyles.join(''), mssg, '\x1b[0m');
