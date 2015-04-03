var elementInsertion = elementInsertion || {};

elementInsertion.addBeforeElement('#randomDiv', 'div', 'I am appended DIV');
elementInsertion.addBeforeElement('#randomDiv', 'div');
elementInsertion.addAfterElement('#randomDiv', 'span', 'I am appended SPAN');
