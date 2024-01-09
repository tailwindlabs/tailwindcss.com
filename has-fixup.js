// This is a very temporary fix to split :has() selectors
// into their own rules for `optimizeUniversalDefaults`
module.exports = function () {
  return {
    postcssPlugin: 'has-fixup',
    RuleExit(rule, { Rule }) {
      if (rule.selectors.length < 2) {
        return
      }

      if (!rule.selectors.some(s => s.includes(':has'))) {
        return
      }

      let withHas = []
      let withoutHas = []

      // Find every selector with the :has() pseudo-class
      for (let sel of rule.selectors) {
        if (sel.includes(':has')) {
          withHas.push(sel)
        } else {
          withoutHas.push(sel)
        }
      }

      // Remove the :has() selectors from the original rule
      rule.selectors = withoutHas

      // Add the :has() selectors to a new rule
      const newRule = new Rule({
        selectors: withHas,
        nodes: rule.clone().nodes,
      })

      rule.parent.insertAfter(rule, newRule)
    }
  }
};

module.exports.postcss = true;
