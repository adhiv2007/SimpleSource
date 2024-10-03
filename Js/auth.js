import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

export async function signUp(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCredential.user);
  return userCredential;
}

export async function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

document.addEventListener('DOMContentLoaded', function() {
  // Sign-up form handling
  const signUpForm = document.querySelector('.signin-form');
  if (signUpForm) {
    signUpForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const email = document.getElementById('email1').value;
      const password = document.getElementById('password1').value;
      try {
        const userCredential = await signUp(email, password);
        console.log('User signed up:', userCredential.user);
        window.location.href = 'email-confirmation.html';
      } catch (error) {
        console.error('Error signing up:', error.message);
        const errorElement = document.getElementById('error-message');
        if (errorElement) {
          errorElement.textContent = error.message;
        } else {
          console.warn('Error message element not found');
        }
      }
    });
  }

  // Sign-in form handling (if needed)
  const signInForm = document.querySelector('.signin-form');
  if (signInForm) {
    signInForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      try {
        const userCredential = await signIn(email, password);
        console.log('User signed in:', userCredential.user);
        // Redirect to dashboard or appropriate page
        window.location.href = 'volunteer-dashboard.html';
      } catch (error) {
        console.error('Error signing in:', error.message);
        const errorElement = document.getElementById('error-message');
        if (errorElement) {
          errorElement.textContent = error.message;
        } else {
          console.warn('Error message element not found');
        }
      }
    });
  }
});

//email resend code
document.addEventListener('DOMContentLoaded', function() {
  const resendButton = document.getElementById('resendEmail');
  const errorMessage = document.getElementById('error-message');

  resendButton.addEventListener('click', async function() {
    try {
      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
        errorMessage.textContent = 'Verification email resent. Please check your inbox.';
        errorMessage.style.color = 'green';
      } else {
        throw new Error('No user is currently signed in.');
      }
    } catch (error) {
      console.error('Error resending verification email:', error);
      errorMessage.textContent = error.message;
      errorMessage.style.color = 'red';
    }
  });
});


//verification complete page redirection

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    window.location.href = 'volunteer-dashboard.html';
  }, 3000);
});