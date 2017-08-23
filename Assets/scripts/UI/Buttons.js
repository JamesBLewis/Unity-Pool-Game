#pragma strict

function start_button() {
  SceneManagement.SceneManager.LoadScene ("Game");
  //Debug.Log("Game Loaded");
}

function menu_button() {
  SceneManagement.SceneManager.LoadScene ("Menu");
  //Debug.Log("Menu Loaded");
}

function quit_button() {
    Application.Quit();
}
