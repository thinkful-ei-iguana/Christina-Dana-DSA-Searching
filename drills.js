const Bst = require('./bst');
const Queue = require('./Queue');
function main() {
  let arr = [
    3,
    5,
    6,
    8,
    11,
    12,
    14,
    15,
    17,
    18
  ];
}

const library = [
  {
    author: 'Cowlishaw, Mike',
    dewey: '005.133',
    title: 'The REXX Language'
  },
  {
    author: 'Sams',
    dewey: '005.133',
    title:
      'Teach Yourself C++ In 21 Days'
  },
  {
    author: 'Stroustrup., Bjarne',
    dewey: '005.133',
    title:
      'The C++ Programming Language'
  },
  {
    author: 'Crockford, Douglas',
    dewey: '005.2762',
    title: 'JavaScript: The Good Parts'
  },
  {
    author: 'Flanagan, David',
    dewey: '005.2762',
    title:
      'JavaScript: The Definitive Guide'
  },
  {
    author: 'Schmidt, Meinhard',
    dewey: '005.44684',
    title: 'Windows Vista for Dummies'
  },
  {
    author: 'Zondervan',
    dewey: '220.52081',
    title: 'NIV Study Bible'
  },
  {
    author: 'Humphries, Russell, Dr.',
    dewey: '231.7652',
    title: 'Starlight and Time'
  },
  {
    author: 'Jane, Frederick Thomas',
    dewey: '623.82509051',
    title: "Jane's Fighting Ships"
  },
  {
    author: 'Norris, Chuck',
    dewey: '796.8092',
    title:
      'The Official Chuck Norris Fact Book'
  }
];
function librarySearch(
  data,
  title,
  dewey,
  start = 0,
  end = data.length - 1
) {
  if (start > end) {
    return 'could not be found';
  }

  let mid = Math.floor(
    (start + end) / 2
  );

  if (data[mid].dewey === dewey) {
    if (data[mid].title === title) {
      console.log(data[mid]);
      return data[mid];
    } else if (
      data[mid.title] < title
    ) {
      librarySearch(
        data,
        title,
        dewey,
        ++mid,
        ++mid
      );
    } else {
      librarySearch(
        data,
        title,
        dewey,
        --mid,
        --mid
      );
    }
  }
  let lessthan =
    data[mid].dewey < dewey;
  librarySearch(
    data,
    title,
    dewey,
    lessthan ? mid + 1 : start,
    lessthan ? end : mid - 1
  );
}

librarySearch(
  library,
  'The Official Chuck Norris Fact Book',
  '796.8092'
);

let data = '25 15 50 10 24 35 70 4 12 18 31 44 66 90 22'
  .split(' ')
  .map(x => Number(x));

let databst = new Bst();
for (let datum of data) {
  databst.insert(datum, datum);
}

function treeTransversalOne(
  data,
  transversals = {
    pre: [],
    in: [],
    post: []
  }
) {
  transversals.pre.push(data.key);
  if (data.left) {
    transversals = treeTransversalOne(
      data.left,
      transversals
    );
  }
  transversals.in.push(data.key);
  if (data.right) {
    transversals = treeTransversalOne(
      data.right,
      transversals
    );
  }
  transversals.post.push(data.key);
  return transversals;
}

console.log(
  treeTransversalOne(databst)
);

let orgstruct = [
  {
    name: 'Captain Piccard',
    rank: 5
  },
  {
    name: 'Commander Riker',
    rank: 3
  },
  {
    name: 'Commander Data',
    rank: 6
  },
  {
    name: 'Lt. Cmdr. Crusher',
    rank: 8
  },
  {
    name: 'Lt. Cmdr. Worf',
    rank: 2
  },
  {
    name: 'Lieutenant Security-officer',
    rank: 1
  },
  {
    name: 'Lt. Cmdr. LaForge',
    rank: 4
  },
  {
    name: 'Liutenant Selar',
    rank: 7
  }
];
let trekky = new Bst();
for (let person of orgstruct) {
  trekky.insert(
    person.rank,
    person.name
  );
}
let commanderqueue = new Queue();
function nextOfficer(
  tree,
  queue,
  values = []
) {
  queue.enqueue(tree);
  while (queue.last) {
    let node = queue.dequeue();
    values.push(node.value);
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }

  return values;
}

console.log(
  trekky,
  nextOfficer(trekky, commanderqueue)
);

function bigProfit() {
  let daily = [
    128,
    97,
    121,
    123,
    98,
    97,
    105
  ];

  let daytrade = new Bst();
  let record;
  for (
    let day = 0;
    day < daily.length - 2;
    day++
  ) {
    record = {
      profit:
        daily[day + 1] - daily[day],
      'day of the week': `${day}-${day +
        1}`
    };
    daytrade.insert(
      record.profit,
      record
    );
  }

  function treeTransversal(
    data,
    transversals = []
  ) {
    if (!data.right) {
      transversals.push(data.value);
    }
    if (data.right) {
      transversals = treeTransversal(
        data.right,
        transversals
      );
    }
    return transversals;
  }
  console.log(
    treeTransversal(daytrade)
  );
}
bigProfit();
