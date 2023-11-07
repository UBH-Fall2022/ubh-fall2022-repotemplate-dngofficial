const negativeWords = [
    "Abrasive", "Apathetic", "Controlling", "Dishonest", "Impatient", "Anxious", "Betrayed", "Disappointed", "Embarrassed", "Jealous",
    "Abysmal", "Bad", "Callous", "Corrosive", "Damage", "Despicable", "Don’t", "Enraged", "Fail", "Gawky", "Haggard", "Hurt", "Icky",
    "Insane", "Jealous", "Lose", "Malicious", "Naive", "Not", "Objectionable", "Pain", "Questionable", "Reject", "Rude", "Sad",
    "Sinister", "Stuck", "Tense", "Ugly", "Unsightly", "Vice", "Wary", "Yell", "Zero", "Adverse", "Banal", "Can’t", "Corrupt",
    "Damaging", "Detrimental", "Dreadful", "Eroding", "Faulty", "Ghastly", "Hard", "Hurtful", "Ignorant", "Insidious", "Junky",
    "Lousy", "Mean", "Nasty", "Noxious", "Odious", "Perturb", "Quirky", "Renege", "Ruthless", "Savage", "Slimy", "Stupid",
    "Terrible", "Undermine", "Untoward", "Vicious", "Weary", "Yucky", "Alarming", "Barbed", "Clumsy", "Dastardly", "Dirty",
    "Dreary", "Evil", "Fear", "Grave", "Hard-hearted", "Ignore", "Injure", "Insipid", "Lumpy", "Menacing", "Naughty", "None",
    "Offensive", "Pessimistic", "Quit", "Repellant", "Scare", "Smelly", "Substandard", "Terrifying", "Unfair", "Unwanted", "Vile",
    "Wicked", "Angry", "Belligerent", "Coarse", "Crazy", "Dead", "Disease", "Feeble", "Greed", "Harmful", "Ill", "Injurious",
    "Messy", "Negate", "No one", "Old", "Petty", "Reptilian", "Scary", "Sobbing", "Suspect", "Threatening", "Unfavorable",
    "Unwelcome", "Villainous", "Woeful", "Annoy", "Bemoan", "Cold", "Creepy", "Decaying", "Disgusting", "Fight", "Grim", "Hate",
    "Immature", "Misshapen", "Negative", "Nothing", "Oppressive", "Plain", "Repugnant", "Scream", "Sorry", "Suspicious", "Unhappy",
    "Unwholesome", "Vindictive", "Worthless", "Anxious", "Beneath", "Cold-hearted", "Criminal", "Deformed", "Disheveled", "Filthy",
    "Grimace", "Hideous", "Imperfect", "Missing", "Never", "Neither", "Poisonous", "Repulsive", "Severe", "Spiteful", "Unhealthy",
    "Unwieldy", "Wound", "Apathy", "Boring", "Collapse", "Cruel", "Deny", "Dishonest", "Foul", "Gross", "Homely", "Impossible",
    "Misunderstood", "No", "Nowhere", "Poor", "Revenge", "Shocking", "Sticky", "Unjust", "Unwise", "Appalling", "Broken",
    "Confused", "Cry", "Deplorable", "Dishonorable", "Frighten", "Grotesque", "Horrendous", "Inane", "Moan", "Nobody", "Prejudice",
    "Revolting", "Shoddy", "Stinky", "Unlucky", "Upset", "Atrocious", "Contrary", "Cutting", "Depressed", "Dismal", "Frightful",
    "Gruesome", "Horrible", "Inelegant", "Moldy", "Nondescript", "Rocky", "Sick", "Stormy", "Unpleasant", "Awful", "Contradictory",
    "Deprived", "Distress", "Guilty", "Hostile", "Infernal", "Monstrous", "Nonsense", "Rotten", "Sickening", "Stressful",
    "Unsatisfactory"
  ];

var customTestingSwitch = false
const myInterval = setInterval(changeComment, 1000)

var nums=[1,2,3,4,5,6,7,8,9,10]
var remaining = new Array()
function changeComment() {

  console.log("testing!")

  console.log(document.querySelector("#comments"))


    for(i = 0; i<nums.length; i++){

    var second = document.querySelector("ytd-comment-thread-renderer:nth-child(" +  nums[i] + ")")
    var commentRenderer = second.firstElementChild
    var mainBody = commentRenderer.children[2]
    var text = mainBody.children[1].children[1].children[1].children[0].children[1]
    var text_str = text.innerHTML

    if (second != null) {

        console.log(second)
        //console.log(commentRenderer)
        //console.log(mainBody)
        //console.log(text)
        console.log(text_str)

        var replacements_1 = [
          "i",
          "a",
        ]

        // censor loop 
        var replacements = replacements_1
        replacements.forEach(r => { 

        var regex = new RegExp(r, "g");
        var res = text_str.replace(regex, "$&#!@*%$");

        text.innerHTML = res
        });
        if (i==nums.length-1){
            if (remaining.length == 0){
                clearInterval(myInterval);
            }else{
                nums=remaining
                remaining=[]
            }
        }
    }else{
        remaining.push(i)
    }
    };

}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    if(request.message == "lock_child"){
    document.body.appendChild(document.createElement('style')).textContent = '#comments { display: none; }';
    }
    else if(request.message == "unlock_child")
    {
      document.body.appendChild(document.createElement('style')).textContent = '#comments { display: block; }';
    }
});

function readData(){
    fetch("./HATESPEECH.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data))
}

function filterComment(commentData, currentToxicityLevel) {
  for (const commentNumber in commentData) {
    if (commentData.hasOwnProperty(commentNumber)) {
      const toxicityScore = parseFloat(commentData[commentNumber]);

      if (toxicityScore > currentToxicityLevel) {
        // Find the comment number in the format "comment#X"
        const commentIndex = parseInt(commentNumber.match(/\d+/)[0]);
        changeComment(commentIndex);
      }
    }
  }
}

function changeCommdddent(index) {
  const commentThread = document.querySelector(`ytd-comment-thread-renderer:nth-child(${index})`);

  if (commentThread) {
    const textElement = commentThread.querySelector("yt-formatted-string#content-text");

    if (textElement) {
      // Replace each letter of the comment text with black squares
      const commentText = textElement.textContent;
      const blackSquareText = '⬛'.repeat(commentText.length);
      textElement.textContent = blackSquareText;
    }
  }
}






