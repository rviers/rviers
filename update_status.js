import fs from 'fs';

const USERNAME = 'rviers';

async function fetchLatestActivity() {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}/events/public`);
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    
    const events = await res.json();
    const pushEvents = events.filter(e => e.type === 'PushEvent');
    
    if (pushEvents.length > 0) {
      const latestPush = pushEvents[0];
      const repoName = latestPush.repo.name.replace(`${USERNAME}/`, '');
      const commits = latestPush.payload.commits;
      const commitMessage = commits && commits.length > 0 ? commits[0].message : 'Routine systems update';
      
      // Clean and truncate the commit message
      const cleanMsg = commitMessage.split('\n')[0];
      const truncated = cleanMsg.length > 55 ? cleanMsg.substring(0, 52) + '...' : cleanMsg;
      
      return { repoName, commitMessage: truncated };
    }
    return { repoName: 'system-core', commitMessage: 'Analyzing current infrastructure and resting...' };
  } catch (error) {
    console.error('Error fetching activity:', error);
    return { repoName: 'unknown', commitMessage: 'Compiling thoughts...' };
  }
}

async function updateStatus() {
  const activity = await fetchLatestActivity();
  const dateStr = new Date().toISOString().split('T')[0] + ' ' + new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' }) + ' UTC';
  
  const template = fs.readFileSync('aether-status-template.svg', 'utf8');
  
  // Basic XML escaping for the commit message
  const escapeXml = (unsafe) => {
    return unsafe.replace(/[<>&'"]/g, (c) => {
      switch (c) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '\'': return '&apos;';
        case '"': return '&quot;';
      }
    });
  };

  let newSvg = template
    .replace('{{DATE}}', dateStr)
    .replace('{{PROJECT}}', escapeXml(activity.repoName))
    .replace('{{COMMIT}}', escapeXml(activity.commitMessage));
    
  fs.writeFileSync('aether-status.svg', newSvg);
  console.log(`Status updated successfully! Repo: ${activity.repoName}`);
}

updateStatus();
